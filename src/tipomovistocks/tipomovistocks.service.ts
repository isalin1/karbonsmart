import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipomovistockDto } from './dto/create-tipomovistock.dto';
import { UpdateTipomovistockDto } from './dto/update-tipomovistock.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TipomovistocksService {
  async create(createTipomovistockDto: CreateTipomovistockDto) {
    return await prisma.tipomovistock.create({
      data: createTipomovistockDto,
    });
  }

  async findAll() {
    return await prisma.tipomovistock.findMany();
  }

  async findOne(id: number) {
    const tipomovistock = await prisma.tipomovistock.findUnique({
      where: { id },
    });

    if (!tipomovistock) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return tipomovistock;
  }

  async update(id: number, updateTipomovistockDto: UpdateTipomovistockDto) {
    await this.findOne(id);

    const tipomovistock = await prisma.tipomovistock.update({
      where: { id },
      data: updateTipomovistockDto,
    });

    return tipomovistock;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.tipomovistock.delete({ where: { id } });
  }
}
