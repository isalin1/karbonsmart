import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdpresentaciontamanoDto } from './dto/create-prodpresentaciontamano.dto';
import { UpdateProdpresentaciontamanoDto } from './dto/update-prodpresentaciontamano.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class ProdpresentaciontamanosService {
  async create(createProdpresentaciontamanoDto: CreateProdpresentaciontamanoDto) {
    const {tamano, negociosIds, prodpresentacionesIds}= createProdpresentaciontamanoDto;

    // validacion si existe un prodpresentaciontamano con el mismo tamano..me parece que este NO debe ser unico
    const existingProdpresentaciontamano = await prisma.prodpresentaciontamano.findFirst({
              where: { tamano: "tamano" },
            });
    if (existingProdpresentaciontamano) {
              throw new ConflictException('El empaque ya está en uso');
            }
    
    //crear prodpresentaciontamano, confirmar si se requiere alguna validacion previa con negocios y prodpresentacion
    return prisma.prodpresentaciontamano.create({
              data: {
                tamano,
                negocios: {
                  connect: negociosIds?.map(id => ({id})) || [],
                },
                prodpresentaciones: {
                  connect: prodpresentacionesIds?.map(id => ({id})) || [],
                },
              }
            })
  }

  async findAll() {
    return prisma.prodpresentaciontamano.findMany({
      include: {negocios:true, prodpresentaciones:true},
    })
  }

  async findOne(id: number) {
    const prodpresentaciontamano = await prisma.prodpresentaciontamano.findUnique({
              where: { id },
              include: { negocios: true, prodpresentaciones:true },
            });
            if (!prodpresentaciontamano) {
              throw new NotFoundException(`No se encontro un producto con id ${id}`);
            }
            return prodpresentaciontamano;
  }

  async update(id: number, updateProdpresentaciontamanoDto: UpdateProdpresentaciontamanoDto) {
    const {tamano, negociosIds, prodpresentacionesIds}= updateProdpresentaciontamanoDto;

 //si envian tamano, se debe validar que sea unico...me parece que tamano No es unico
        if (tamano !== null && tamano !== undefined) {
        const existingProdpresentaciontamano = await prisma.prodpresentaciontamano.findFirst({
          where: { tamano },
        });
        if (existingProdpresentaciontamano) {
          throw new ConflictException('El empaque ya está en uso');
        }
      } else {
        console.warn('El campo tamano es opcional y no fue proporcionado.');
          }

      // verificar si esta validacion es necesaria en la relacion muchos a muchos
      if (negociosIds !== null && negociosIds !== undefined) {
                      const negocio = await prisma.negocio.findMany({
                        where: {
                          id: {in: negociosIds },
                        },
                      });
                      if (negocio.length===0) {
                        throw new NotFoundException(
                          `no se encontro un elemento con el id ${negociosIds}`,
                        );
                      }
                      } else {
                        console.warn('El campo negocioId es opcional y no fue proporcionado.');
                        }
      if (prodpresentacionesIds !== null && prodpresentacionesIds !== undefined) {
                          const prodpresentacion = await prisma.prodpresentacion.findMany({
                            where: {
                              id: {in: prodpresentacionesIds },
                            },
                          });
                          if (prodpresentacion.length===0) {
                            throw new NotFoundException(
                              `no se encontro un elemento con el id ${prodpresentacionesIds}`,
                            );
                          }
                          } else {
                            console.warn('El campo prodpresentacionId es opcional y no fue proporcionado.');
                            } 
      return prisma.prodpresentaciontamano.update({
                where: {id},
                data: {
                tamano,
                negocios: {
                    set: negociosIds?.map(id => ({id})) || [],
                    },
                prodpresentaciones: {
                  set: prodpresentacionesIds?.map(id => ({id})) || [],
                }
                },
                include: {negocios: true, prodpresentaciones: true},
                            })                 

  }

  remove(id: number) {
    return prisma.prodpresentaciontamano.delete({
      where: {id},
    })
  }
}
