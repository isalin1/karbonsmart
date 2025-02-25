import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovisaldoclienteDto } from './dto/create-movisaldocliente.dto';
import { UpdateMovisaldoclienteDto } from './dto/update-movisaldocliente.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class MovisaldoclientesService {
  async create(createMovisaldoclienteDto: CreateMovisaldoclienteDto) {
    const {puntoventaId, tipomovimientoId} = createMovisaldoclienteDto;

    //validacion si existe llave foranea
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
    const tipomovimiento = await prisma.tipomovimiento.findUnique({
                    where: {
                      id: tipomovimientoId,
                    },
              });
              if (!tipomovimiento) {
                    throw new NotFoundException(
                      `no se encontro un elemento con el id ${tipomovimientoId}`
                    );
              }
              
    return prisma.movisaldocliente.create({
                data: createMovisaldoclienteDto,
              });

  }

  async findAll() {
    return await prisma.movisaldocliente.findMany();
  }

  async findOne(id: number) {
    const movisaldocliente = await prisma.movisaldocliente.findUnique({ where: { id } });
    if (!movisaldocliente) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return movisaldocliente;
  }

  async update(id: number, updateMovisaldoclienteDto: UpdateMovisaldoclienteDto) {
    const {puntoventaId, tipomovimientoId} = updateMovisaldoclienteDto;
    //si envian llave foranea, hay que validar que exista
    if (puntoventaId !== null && puntoventaId !== undefined) {
          const puntoventa = await prisma.puntoventa.findUnique({
                              where: {
                                id: puntoventaId,
                              },
                            });
        if (!puntoventa) {
                              throw new NotFoundException(
                                `no se encontro un elemento con el id ${puntoventaId}`
                              )};
    } else {
                              console.warn('El campo puntoventaId es opcional y no fue proporcionado.');
                }

    if (tipomovimientoId !== null && tipomovimientoId !== undefined) {
          const tipomovimiento = await prisma.tipomovimiento.findUnique({
                              where: {
                                id: tipomovimientoId,
                              },
                            });
        if (!tipomovimiento) {
                              throw new NotFoundException(
                                `no se encontro un elemento con el id ${tipomovimientoId}`
                              )};
    } else {
                              console.warn('El campo tipomovimientoId es opcional y no fue proporcionado.');
                }

  //actualizacion de movisaldocliente
  const movisaldocliente = await prisma.movisaldocliente.update({
  where: { id },
  data: updateMovisaldoclienteDto,
  });
  return movisaldocliente;

  }

  async remove(id: number) {
    await this.findOne(id);
    return await prisma.movisaldocliente.delete({where: {id}});
  }
}
