import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnidadDto } from './dto/create-unidad.dto';
import { UpdateUnidadDto } from './dto/update-unidad.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class UnidadService {
  async create(createUnidadDto: CreateUnidadDto) {
    return await prisma.unidad.create({
      data: createUnidadDto,
    });
  }

  async findAll() {
    return await prisma.unidad.findMany();
  }

  async findOne(id: number) {
    const unidad = await prisma.unidad.findUnique({ where: { id } });

    if (!unidad) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return unidad;
  }

  async update(id: number, updateUnidadDto: UpdateUnidadDto) {
    await this.findOne(id);

    const unidad = await prisma.unidad.update({
      where: { id },
      data: updateUnidadDto,
    });

    return unidad;
  }

  async remove(id: number) {
    
    const unidad = await prisma.unidad.findUnique({ where: { id } });
    if (!unidad)
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.unidad.delete({ where: { id } });
  }
}
