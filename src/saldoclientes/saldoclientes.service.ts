import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaldoclienteDto } from './dto/create-saldocliente.dto';
import { UpdateSaldoclienteDto } from './dto/update-saldocliente.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class SaldoclientesService {
  async create(createSaldoclienteDto: CreateSaldoclienteDto) {
    const {puntoventaId} = createSaldoclienteDto;
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
      return prisma.saldocliente.create({
                data: createSaldoclienteDto,
              });

  }

  async findAll() {
    return await prisma.saldocliente.findMany();
  }

  async findOne(id: number) {
    const saldocliente = await prisma.saldocliente.findUnique({ where: { id } });

    if (!saldocliente) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return saldocliente;
  }

  async update(id: number, updateSaldoclienteDto: UpdateSaldoclienteDto) {
    const {puntoventaId} = updateSaldoclienteDto;
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
    //actualizacion de saldocliente
    const saldocliente = await prisma.saldocliente.update({
    where: { id },
    data: updateSaldoclienteDto,
    });
    return saldocliente; 
  }

  async remove(id: number) {
    await this.findOne(id);
    return await prisma.saldocliente.delete({where: {id}});
  }
}
