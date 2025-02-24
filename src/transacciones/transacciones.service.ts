import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TransaccionesService {
  async create(createTransaccioneDto: CreateTransaccioneDto) {
    const {puntoventaId} = createTransaccioneDto;

    const puntoventa = await prisma.puntoventa.findUnique({
          where: {
            id: puntoventaId,
          },
        });
        if (!puntoventa) {
          throw new NotFoundException(
            `no se encontro un departamento con el id ${puntoventaId}`,
          );
        }
        return prisma.transaccion.create({
          data: createTransaccioneDto,
        });
  }

  async findAll() {
    return await prisma.transaccion.findMany();
  }

  async findOne(id: number) {
    const transaccion = await prisma.transaccion.findUnique({ where: { id } });

    if (!transaccion) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return transaccion;
  }

  async update(id: number, updateTransaccioneDto: UpdateTransaccioneDto) {
    const {puntoventaId} = updateTransaccioneDto;
    await this.findOne(id);

  //si envian llave foranea, hay que validar que exista
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

   //actualizacion de transaccion
   const transaccion = await prisma.transaccion.update({
    where: { id },
    data: updateTransaccioneDto,
});

return transaccion;         
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.transaccion.delete({ where: { id } });
  }
}
