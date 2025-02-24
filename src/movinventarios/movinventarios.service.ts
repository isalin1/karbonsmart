import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovinventarioDto } from './dto/create-movinventario.dto';
import { UpdateMovinventarioDto } from './dto/update-movinventario.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class MovinventariosService {
  async create(createMovinventarioDto: CreateMovinventarioDto) {
    const {tipomovistockId, transaccionId, productovarianteId} = createMovinventarioDto;
          
    //validacion si existe llave foranea
          const tipomovistock = await prisma.tipomovistock.findUnique({
                where: {
                  id: tipomovistockId,
                },
          });
          if (!tipomovistock) {
                throw new NotFoundException(
                  `no se encontro un elemento con el id ${tipomovistockId}`,
                );
          }
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
      const productovariante = await prisma.productovariante.findUnique({
        where: {
          id: productovarianteId,
        },
      });
      if (!productovariante) {
        throw new NotFoundException(
          `no se encontro un elemento con el id ${productovarianteId}`,
        );
      }
      return prisma.movinventario.create({
        data: createMovinventarioDto,
      });
      
  }

  async findAll() {
    return await prisma.movinventario.findMany();
  }

  async findOne(id: number) {
    const movinventario = await prisma.movinventario.findUnique({ where: { id } });

    if (!movinventario) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return movinventario;
  }

  async update(id: number, updateMovinventarioDto: UpdateMovinventarioDto) {
    const {tipomovistockId, transaccionId, productovarianteId} = updateMovinventarioDto;

    //si envian llave foranea, hay que validar que exista
    if (tipomovistockId !== null && tipomovistockId !== undefined) {
      const tipomovistock = await prisma.tipomovistock.findUnique({
                          where: {
                            id: tipomovistockId,
                          },
                        });
    if (!tipomovistock) {
                          throw new NotFoundException(
                            `no se encontro un elemento con el id ${tipomovistockId}`,
                          );
                        }
    } else {
                          console.warn('El campo tipomovistockId es opcional y no fue proporcionado.');
            }

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

    if (productovarianteId !== null && productovarianteId !== undefined) {
      const productovariante = await prisma.productovariante.findUnique({
                                  where: {
                                    id: productovarianteId,
                                  },
                                });
    if (!productovariante) {
                                  throw new NotFoundException(
                                    `no se encontro un elemento con el id ${productovarianteId}`,
                                  );
                                }
    } else {
                                  console.warn('El campo productovarianteId es opcional y no fue proporcionado.');
          }

   //actualizacion de movinventarios
 const movinventario = await prisma.movinventario.update({
  where: { id },
  data: updateMovinventarioDto,
});

return movinventario; 

  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.movinventario.delete({where: {id}});
  }
}
