import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagodeclienteDto } from './dto/create-pagodecliente.dto';
import { UpdatePagodeclienteDto } from './dto/update-pagodecliente.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class PagodeclientesService {
  async create(createPagodeclienteDto: CreatePagodeclienteDto) {
    const {tipopagoId, puntoventaId} = createPagodeclienteDto;

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
    const puntoventa = await prisma.puntoventa.findUnique({
            where: {
              id: puntoventaId,
            },
      });
      if (!puntoventa) {
            throw new NotFoundException(
              `no se encontro un elemento con el id ${puntoventaId}`,
            );
      }
      return prisma.pagodecliente.create({
        data: createPagodeclienteDto,
      });
  }

  async findAll() {
    return await prisma.pagodecliente.findMany();
  }

  async findOne(id: number) {
    const pagodecliente = await prisma.pagodecliente.findUnique({ where: { id } });

    if (!pagodecliente) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return pagodecliente;
  }

  async update(id: number, updatePagodeclienteDto: UpdatePagodeclienteDto) {
    const {tipopagoId, puntoventaId} = updatePagodeclienteDto;
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

    if (puntoventaId !== null && puntoventaId !== undefined) {
              const puntoventa = await prisma.puntoventa.findUnique({
                                  where: {
                                    id: puntoventaId,
                                  },
                                });
            if (!puntoventa) {
                                  throw new NotFoundException(
                                    `no se encontro un elemento con el id ${puntoventaId}`,
                                  );
                                }
            } else {
                                  console.warn('El campo puntoventaId es opcional y no fue proporcionado.');
                    }
   //actualizacion de pagodeclientes
 const pagodecliente = await prisma.pagodecliente.update({
  where: { id },
  data: updatePagodeclienteDto,
});

return pagodecliente; 

  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.pagodecliente.delete({where: {id}});
  }
}
