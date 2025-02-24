import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdpresentacionDto } from './dto/create-prodpresentacion.dto';
import { UpdateProdpresentacionDto } from './dto/update-prodpresentacion.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class ProdpresentacionService {
  async create(createProdpresentacionDto: CreateProdpresentacionDto) {
    const {empaque, unidadesIds}= createProdpresentacionDto;

    // validacion si existe un prodpresentacion con el mismo empaque
    const existingProdpresentacion = await prisma.prodpresentacion.findFirst({
              where: { empaque: "empaque" },
            });
    if (existingProdpresentacion) {
              throw new ConflictException('El empaque ya está en uso');
            }

    return prisma.prodpresentacion.create({
              data: {
                empaque,
                unidades: {
                  connect: unidadesIds?.map(id => ({id})) || [],
                }
              }
            })
  }

  findAll() {
    return prisma.prodpresentacion.findMany({
      include: {unidades:true},
    })
  }

  async findOne(id: number) {
    const prodpresentacion = await prisma.prodpresentacion.findUnique({
          where: { id },
          include: { unidades: true },
        });
        if (!prodpresentacion) {
          throw new NotFoundException(`No se encontro un producto con id ${id}`);
        }
        return prodpresentacion;
  }

  async update(id: number, updateProdpresentacionDto: UpdateProdpresentacionDto) {
    const {empaque, unidadesIds}= updateProdpresentacionDto;

  //si envian empaque, se debe validar que sea unico
        if (empaque !== null && empaque !== undefined) {
        const existingProdpresentacion = await prisma.prodpresentacion.findFirst({
          where: { empaque },
        });
        if (existingProdpresentacion) {
          throw new ConflictException('El empaque ya está en uso');
        }
      } else {
        console.warn('El campo empaque es opcional y no fue proporcionado.');
          }
// verificar si esta validacion es necesaria en la relacion muchos a muchos
if (unidadesIds !== null && unidadesIds !== undefined) {
            const unidades = await prisma.unidad.findMany({
              where: {
                id: {in: unidadesIds },
              },
            });
            if (unidades.length===0) {
              throw new NotFoundException(
                `no se encontro un elemento con el id ${unidadesIds}`,
              );
            }
            } else {
              console.warn('El campo negocioId es opcional y no fue proporcionado.');
              }

      return prisma.prodpresentacion.update({
                where: {id},
                data: {
                  empaque,
                  unidades: {
                    set: unidadesIds?.map(id => ({id})) || [],
                  },
                },
                include: {unidades: true},
              })

  }

  remove(id: number) {
    return prisma.prodpresentacion.delete({
      where: {id},
    })
  }
}
