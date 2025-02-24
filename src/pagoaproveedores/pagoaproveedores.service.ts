import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoaproveedoreDto } from './dto/create-pagoaproveedore.dto';
import { UpdatePagoaproveedoreDto } from './dto/update-pagoaproveedore.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class PagoaproveedoresService {
  async create(createPagoaproveedoreDto: CreatePagoaproveedoreDto) {
    const {tipopagoId, negocioId} = createPagoaproveedoreDto;
    
        //validacion si existe llave foranea
        const tipopago = await prisma.tipopago.findUnique({
                    where: {
                      id: tipopagoId,
                    },
              });
              if (!tipopago) {
                    throw new NotFoundException(
                      `no se encontro un elemento con el id ${tipopagoId}`,
                    );
              }
        const negocio = await prisma.negocio.findUnique({
                where: {
                  id: negocioId,
                },
          });
          if (!negocio) {
                throw new NotFoundException(
                  `no se encontro un elemento con el id ${negocioId}`,
                );
          }
          return prisma.pagoaproveedor.create({
            data: createPagoaproveedoreDto,
          });
  }

  async findAll() {
    return await prisma.pagoaproveedor.findMany();
  }

  async findOne(id: number) {
    const pagoaproveedor = await prisma.pagoaproveedor.findUnique({ where: { id } });

    if (!pagoaproveedor) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return pagoaproveedor;
  }

  async update(id: number, updatePagoaproveedoreDto: UpdatePagoaproveedoreDto) {
    const {tipopagoId, negocioId} = updatePagoaproveedoreDto;
        //si envian llave foranea, hay que validar que exista
        if (tipopagoId !== null && tipopagoId !== undefined) {
          const tipopago = await prisma.tipopago.findUnique({
                              where: {
                                id: tipopagoId,
                              },
                            });
        if (!tipopago) {
                              throw new NotFoundException(
                                `no se encontro un elemento con el id ${tipopagoId}`,
                              );
                            }
        } else {
                              console.warn('El campo tipopagoId es opcional y no fue proporcionado.');
                }
    
        if (negocioId !== null && negocioId !== undefined) {
                  const negocio = await prisma.negocio.findUnique({
                                      where: {
                                        id: negocioId,
                                      },
                                    });
                if (!negocio) {
                                      throw new NotFoundException(
                                        `no se encontro un elemento con el id ${negocioId}`,
                                      );
                                    }
                } else {
                                      console.warn('El campo puntoventaId es opcional y no fue proporcionado.');
                        }
       //actualizacion de pagodeclientes
     const pagoaproveedor = await prisma.pagoaproveedor.update({
      where: { id },
      data: updatePagoaproveedoreDto,
    });
    
    return pagoaproveedor; 
    
  }

  async remove(id: number) {
    await this.findOne(id);
    return await prisma.pagoaproveedor.delete({where: {id}});
  }
}
