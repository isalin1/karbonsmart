import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class ProductosService {
  async create(createProductoDto: CreateProductoDto) {
    const {nombre, tipoproductoId, negocioIds}= createProductoDto;
        // validacion si existe un producto con el mismo nombre
        const existingProducto = await prisma.producto.findFirst({
          where: { nombre: "nombre" },
        });
        if (existingProducto) {
          throw new ConflictException('El nombre ya está en uso');
        }

        const tipoproducto = await prisma.tipoproducto.findUnique({
              where: {
              id: tipoproductoId,
              },
              });
              if (!tipoproducto) {
                  throw new NotFoundException(
                  `no se encontro un tipoproducto con el id ${tipoproductoId}`,
                  );
              }
      //creacion de producto. Confirmar si se requiere validacion de negocioId
      return prisma.producto.create({
          data: {
            nombre,
            tipoproductoId,
            negocios: {
              connect: negocioIds?.map(id => ({id})) || [],
            }
          }
        })
  }

  findAll() {
    return prisma.producto.findMany({
      include: {negocios:true},
    })
  }

  async findOne(id: number) {
    const producto = await prisma.producto.findUnique({
      where: { id },
      include: { negocios: true },
    });
    if (!producto) {
      throw new NotFoundException(`No se encontro un producto con id ${id}`);
    }
    return producto;
  }
  

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const {nombre, tipoproductoId, negocioIds}= updateProductoDto;

     //si envian nombre de producto, se debe validar que sea unico
        if (nombre !== null && nombre !== undefined) {
        const existingProducto = await prisma.producto.findFirst({
          where: { nombre },
        });
        if (existingProducto) {
          throw new ConflictException('El nombre ya está en uso');
        }
      } else {
        console.warn('El campo nombre es opcional y no fue proporcionado.');
          }
if (tipoproductoId !== null && tipoproductoId !== undefined) {
        const tipoproducto = await prisma.tipoproducto.findUnique({
          where: {
            id: tipoproductoId,
          },
        });
        if (!tipoproducto) {
          throw new NotFoundException(
            `no se encontro un elemento con el id ${tipoproductoId}`,
          );
        }
        } else {
          console.warn('El campo tipoproductoId es opcional y no fue proporcionado.');
          }
// verificar porque viene de relacion muchos a muchos
if (negocioIds !== null && negocioIds !== undefined) {
            const negocio = await prisma.negocio.findMany({
              where: {
                id: {in: negocioIds },
              },
            });
            if (negocio.length===0) {
              throw new NotFoundException(
                `no se encontro un elemento con el id ${negocioIds}`,
              );
            }
            } else {
              console.warn('El campo negocioId es opcional y no fue proporcionado.');
              }
      
      return prisma.producto.update({
        where: {id},
        data: {
          nombre,
          tipoproductoId,
          negocios: {
            set: negocioIds?.map(id => ({id})) || [],
          },
        },
        include: {negocios: true},
      })

  }

  remove(id: number) {
    return prisma.producto.delete({
      where: {id},
    })
  }
}
