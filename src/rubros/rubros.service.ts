import { Injectable, NotFoundException } from '@nestjs/common';

import { prisma } from 'src/prisma/client';
import { CreateRubroDto } from './dto/create-rubro.dto';
import { UpdateRubroDto } from './dto/update-rubro.dto';

@Injectable()
export class RubrosService {
  async create(createRubroDto: CreateRubroDto) {
    return await prisma.rubro.create({
      data: createRubroDto,
    });
  }

  async findAll() {
    return await prisma.rubro.findMany();
  }

  async findOne(id: number) {
    const rubro = await prisma.rubro.findUnique({ where: { id } });

    if (!rubro) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return rubro;
  }

  async update(id: number, updateRubroDto: UpdateRubroDto) {
    await this.findOne(id);

    const rubro = await prisma.rubro.update({
      where: { id },
      data: updateRubroDto,
    });

    return rubro;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.rubro.delete({ where: { id } });
  }
}
