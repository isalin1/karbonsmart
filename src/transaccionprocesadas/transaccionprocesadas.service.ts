import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransaccionprocesadaDto } from './dto/create-transaccionprocesada.dto';
import { UpdateTransaccionprocesadaDto } from './dto/update-transaccionprocesada.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TransaccionprocesadasService {

  async create(createTransaccionprocesadaDto: CreateTransaccionprocesadaDto) {
    const {transaccionId}= createTransaccionprocesadaDto;
          //validacion si existe llave foranea
          const transaccion = await prisma.transaccion.findUnique({
                where: {
                  id: transaccionId,
                },
          });
          if (!transaccion) {
                throw new NotFoundException(
                  `no se encontro un departamento con el id ${transaccionId}`,
                );
          }

          return prisma.transaccionprocesada.create({
            data: createTransaccionprocesadaDto,
          });
  }

  async findAll() {
    return await prisma.transaccionprocesada.findMany();
  }

  async findOne(id: number) {
    const transaccionprocesada = await prisma.transaccionprocesada.findUnique({ where: { id } });

    if (!transaccionprocesada) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return transaccionprocesada;
  }

  async update(id: number, updateTransaccionprocesadaDto: UpdateTransaccionprocesadaDto) {
    const {transaccionId} = updateTransaccionprocesadaDto;
    await this.findOne(id);

    //si envian llave foranea, hay que validar que exista
          if (transaccionId !== null && transaccionId !== undefined) {
                const transaccion = await prisma.transaccion.findUnique({
                      where: {
                        id: transaccionId,
                      },
                    });
                if (!transaccion) {
                      throw new NotFoundException(
                        `no se encontro un elemento con el id ${transaccionId}`,
                      );
                    }
                } else {
                      console.warn('El campo transaccionId es opcional y no fue proporcionado.');
                }
 //actualizacion de transaccionprocesada
 const transaccionprocesada = await prisma.transaccionprocesada.update({
  where: { id },
  data: updateTransaccionprocesadaDto,
});

return transaccionprocesada; 

  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.transaccionprocesada.delete({ where: { id } });
  }
}
