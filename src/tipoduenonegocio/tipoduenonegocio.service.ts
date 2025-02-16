import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoduenonegocioDto } from './dto/create-tipoduenonegocio.dto';
import { UpdateTipoduenonegocioDto } from './dto/update-tipoduenonegocio.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TipoduenonegocioService {
  async create(createTipoduenonegocioDto: CreateTipoduenonegocioDto) {
    return await prisma.tipoduenonegocio.create({
      data: createTipoduenonegocioDto,
    });
  }

  async findAll() {
    return await prisma.tipoduenonegocio.findMany();
  }

  async findOne(id: number) {
    const tipoduenonegocio = await prisma.tipoduenonegocio.findUnique({
      where: { id },
    });

    if (!tipoduenonegocio) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return tipoduenonegocio;
  }

  async update(
    id: number,
    updateTipoduenonegocioDto: UpdateTipoduenonegocioDto,
  ) {
    await this.findOne(id);

    const tipoduenonegocio = await prisma.tipoduenonegocio.update({
      where: { id },
      data: updateTipoduenonegocioDto,
    });

    return tipoduenonegocio;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.tipoduenonegocio.delete({ where: { id } });
  }
}
