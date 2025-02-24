import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class EncargadosService {

  async create(createEncargadoDto: CreateEncargadoDto) {
    const { userId, negocioId } = createEncargadoDto;
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
         // Si negocioId es opcional, se verifica si está definido
        if (negocioId !== null && negocioId !== undefined){
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
        } else {
          console.warn('El campo negocioId es opcional y no fue proporcionado.');
        }

        return prisma.encargado.create({
          data: createEncargadoDto,
        });
    
  }

  async findAll() {
    return await prisma.encargado.findMany();
  }

  async findOne(id: number) {
    const encargado = await prisma.encargado.findUnique({ where: { id } });

    if (!encargado) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return encargado;
  }

  async update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    const { userId, negocioId } = updateEncargadoDto;
    await this.findOne(id);

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

    const encargado = await prisma.encargado.update({
      where: { id },
      data: updateEncargadoDto,
    });

    return encargado;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.encargado.delete({ where: { id } });
  }
}
