import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNegocioDto } from './dto/create-negocio.dto';
import { UpdateNegocioDto } from './dto/update-negocio.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class NegociosService {

  async create(createNegocioDto: CreateNegocioDto) {
    //se debe validar que el negocio sea unico??...se validaria que el ruc sea unico?
    const { rubroId, tipoduenonegocioId, userId, encargadoId  } = createNegocioDto;

            const rubro = await prisma.rubro.findUnique({
              where: {
                id: rubroId,
              },
            });
            if (!rubro) {
              throw new NotFoundException(
                `no se encontro un rubro con el id ${rubroId}`,
              );
            }
            const tipoduenonegocio = await prisma.tipoduenonegocio.findUnique({
              where: {
                id: tipoduenonegocioId,
              },
            });
            if (!tipoduenonegocio) {
              throw new NotFoundException(
                `no se encontro un elemento con el id ${tipoduenonegocioId}`,
              );
            }
            const user = await prisma.user.findUnique({
              where: {
                id: userId,
              },
            });
            if (!user) {
              throw new NotFoundException(
                `no se encontro un usuario con el id ${userId}`,
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
        return prisma.negocio.create({
            data: createNegocioDto,
        });
  }

  async findAll() {
    return await prisma.negocio.findMany();
  }

  async findOne(id: number) {
    const negocio = await prisma.negocio.findUnique({ where: { id } });

    if (!negocio) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return negocio;
  }

  async update(id: number, updateNegocioDto: UpdateNegocioDto) {
    const { rubroId, tipoduenonegocioId, userId, encargadoId } = updateNegocioDto;
    await this.findOne(id);

 // como es actualizacion,rubroId es opcional, se verifica si la excepcion cuando no se actualiza
  if (rubroId !== null && rubroId !== undefined) {
    const rubro = await prisma.rubro.findUnique({
      where: {
        id: rubroId,
      },
    });
    if (!rubro) {
      throw new NotFoundException(
        `no se encontro un rubro con el id ${rubroId}`,
      );
    }
    } else {
      console.warn('El campo rubroId es opcional no fue proporcionado.');
        }

    if (tipoduenonegocioId !== null && tipoduenonegocioId !== undefined) {
    const tipoduenonegocio = await prisma.tipoduenonegocio.findUnique({
      where: {
        id: tipoduenonegocioId,
      },
    });
    if (!tipoduenonegocio) {
      throw new NotFoundException(
        `no se encontro un elemento con el id ${tipoduenonegocioId}`,
      );
    }
    } else {
      console.warn('El campo tipoduenonegocioId es opcional no fue proporcionado.');
        }
        
    if (userId !== null && userId !== undefined) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException(
        `no se encontro un usuario con el id ${userId}`,
      );
    }
    } else {
      console.warn('El campo userId es opcional no fue proporcionado.');
        }
    if (encargadoId !== null && encargadoId !== undefined) {
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
    } else {
      console.warn('El campo encargadoId es opcional no fue proporcionado.');
        }

    const negocio = await prisma.negocio.update({
      where: { id },
      data: updateNegocioDto,
    });

    return negocio;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.negocio.delete({ where: { id } });
  }
}
