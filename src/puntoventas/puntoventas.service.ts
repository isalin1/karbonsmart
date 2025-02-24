import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePuntoventaDto } from './dto/create-puntoventa.dto';
import { UpdatePuntoventaDto } from './dto/update-puntoventa.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class PuntoventasService {
  async create(createPuntoventaDto: CreatePuntoventaDto) {
     const { nombrecomercial, negocioId, encargadoId , departamentoId, provinciaId, distritoId } = createPuntoventaDto;
     
     //se debe validar que el nombrecomercial de punto de venta sea unico??
     const existingPuntoventa = await prisma.puntoventa.findUnique({
           where: { nombrecomercial },
         });
         if (existingPuntoventa) {
           throw new ConflictException('El nombre comercial ya está en uso');
         }

         const negocio = await prisma.negocio.findUnique({
              where: {
                id: negocioId,
               },
               });
              if (!negocio) {
                  throw new NotFoundException(
                   `no se encontro un negocio con el id ${negocioId}`,
                   );
               }
          const encargado = await prisma.encargado.findUnique({
                where: {
                  id: encargadoId,
                 },
                 });
                if (!encargado) {
                    throw new NotFoundException(
                     `no se encontro un encargado con el id ${encargadoId}`,
                     );
                 }
          const departamento = await prisma.departamento.findUnique({
                  where: {
                    id: departamentoId,
                   },
                   });
                  if (!departamento) {
                      throw new NotFoundException(
                       `no se encontro un departamento con el id ${departamentoId}`,
                       );
                   }

          const provincia = await prisma.provincia.findUnique({
                    where: {
                      id: provinciaId,
                     },
                     });
                    if (!provincia) {
                        throw new NotFoundException(
                         `no se encontro una provincia con el id ${provinciaId}`,
                         );
                     }
          const distrito = await prisma.distrito.findUnique({
                      where: {
                        id: distritoId,
                       },
                       });
                      if (!distrito) {
                          throw new NotFoundException(
                           `no se encontro un distrito con el id ${distritoId}`,
                           );
                       }
        return prisma.puntoventa.create({
              data: createPuntoventaDto,
         });

  }

  async findAll() {
    return await prisma.puntoventa.findMany();
  }

  async findOne(id: number) {
    const puntoventa = await prisma.puntoventa.findUnique({ where: { id } });

    if (!puntoventa) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return puntoventa;
  }

  async update(id: number, updatePuntoventaDto: UpdatePuntoventaDto) {
    const { nombrecomercial, negocioId, encargadoId , departamentoId, provinciaId, distritoId } = updatePuntoventaDto;
    await this.findOne(id);

    //si envian nombre comercial, se debe validar que sea unico
    if (nombrecomercial !== null && nombrecomercial !== undefined) {
    const existingPuntoventa = await prisma.puntoventa.findUnique({
      where: { nombrecomercial },
    });
    if (existingPuntoventa) {
      throw new ConflictException('El nombre comercial ya está en uso');
    }
  } else {
    console.warn('El campo nombrecomercial es opcional y no fue proporcionado.');
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
          console.warn('El campo negocioId es opcional y no fue proporcionado.');
          }

    if (encargadoId !== null && encargadoId !== undefined) {
            const encargado = await prisma.encargado.findUnique({
              where: {
                id: encargadoId,
              },
            });
            if (!encargado) {
              throw new NotFoundException(
                `no se encontro un elemento con el id ${encargadoId}`,
              );
            }
            } else {
              console.warn('El campo encargadoId es opcional y no fue proporcionado.');
              }

    if (departamentoId !== null && departamentoId !== undefined) {
                const departamento = await prisma.departamento.findUnique({
                  where: {
                    id: departamentoId,
                  },
            });
            if (!departamento) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${departamentoId}`,
            );
            }
            } else {
                  console.warn('El campo departamentoId es opcional y no fue proporcionado.');
            }

    if (provinciaId !== null && provinciaId !== undefined) {
              const provincia = await prisma.provincia.findUnique({
                where: {
                  id: provinciaId,
                },
            });
            if (!provincia) {
                throw new NotFoundException(
                  `no se encontro un elemento con el id ${provinciaId}`,
            );
            }
            } else {
                console.warn('El campo provinciaId es opcional y no fue proporcionado.');
            }

    if (distritoId !== null && distritoId !== undefined) {
              const distrito = await prisma.distrito.findUnique({
                where: {
                  id: distritoId,
                },
            });
            if (!distrito) {
                throw new NotFoundException(
                  `no se encontro un elemento con el id ${distritoId}`,
            );
            }
            } else {
                console.warn('El campo distritoId es opcional y no fue proporcionado.');
            }
    //actualizacion de punto de venta
    const puntoventa = await prisma.puntoventa.update({
              where: { id },
              data: updatePuntoventaDto,
    });
        
    return puntoventa;

  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.puntoventa.delete({ where: { id } });
  }
}
