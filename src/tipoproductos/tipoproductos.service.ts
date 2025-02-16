import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoproductoDto } from './dto/create-tipoproducto.dto';
import { UpdateTipoproductoDto } from './dto/update-tipoproducto.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TipoproductosService {
  async create(createTipoproductoDto: CreateTipoproductoDto) {
    return await prisma.tipoproducto.create({
      data: createTipoproductoDto,
    });
  }

  async findAll() {
    return await prisma.tipoproducto.findMany();
  }

  async findOne(id: number) {
    const tipoproducto = await prisma.tipoproducto.findUnique({
      where: { id },
    });

    if (!tipoproducto) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return tipoproducto;
  }

  async update(id: number, updateTipoproductoDto: UpdateTipoproductoDto) {
    await this.findOne(id);

    const tipoproducto = await prisma.tipoproducto.update({
      where: { id },
      data: updateTipoproductoDto,
    });

    return tipoproducto;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.tipoproducto.delete({ where: { id } });
  }
}
