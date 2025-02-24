import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransacciondetalleDto } from './dto/create-transacciondetalle.dto';
import { UpdateTransacciondetalleDto } from './dto/update-transacciondetalle.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TransacciondetallesService {
  async create(createTransacciondetalleDto: CreateTransacciondetalleDto) {
    const {cantidad, preciounit, transaccionId, productoId} = createTransacciondetalleDto;

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

    const producto = await prisma.producto.findUnique({
              where: {
                id: productoId,
              },
            });
            if (!producto) {
              throw new NotFoundException(
                `no se encontro un elemento con el id ${productoId}`,
              );
            }     

      return await prisma.transacciondetalle.create({
              data: {
                cantidad: cantidad,
                preciounit: preciounit,
                subtotal: cantidad * preciounit,
                transaccionId: transaccionId,
                productoId: productoId,
                
              },
            }); 
  }

  async findAll() {
    return await prisma.transacciondetalle.findMany();
  }

  async findOne(id: number) {
    const transacciondetalle = await prisma.transacciondetalle.findUnique({ where: { id } });

    if (!transacciondetalle) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return transacciondetalle;
  }

  async update(id: number, updateTransacciondetalleDto: UpdateTransacciondetalleDto) {
    const {transaccionId, productoId} = updateTransacciondetalleDto;
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
 
      if (productoId !== null && productoId !== undefined) {
            const producto = await prisma.producto.findUnique({
                  where: {
                    id: productoId,
                  },
                });
            if (!producto) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${productoId}`,
                  );
                }
            } else {
                  console.warn('El campo productoId es opcional y no fue proporcionado.');
            }

       //actualizacion de transacciondetalle
   const transacciondetalle = await prisma.transacciondetalle.update({
    where: { id },
    data: updateTransacciondetalleDto,
});
    return transacciondetalle;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.transacciondetalle.delete({ where: { id } });
  }
}
