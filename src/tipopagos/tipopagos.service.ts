import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipopagoDto } from './dto/create-tipopago.dto';
import { UpdateTipopagoDto } from './dto/update-tipopago.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class TipopagosService {
  async create(createTipopagoDto: CreateTipopagoDto) {
    return await prisma.tipopago.create({
      data: createTipopagoDto,
    });
  }

  async findAll() {
    return await prisma.tipopago.findMany();
  }

  async findOne(id: number) {
    const tipopago = await prisma.tipopago.findUnique({ where: { id } });

    if (!tipopago) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return tipopago;
  }

  async update(id: number, updateTipopagoDto: UpdateTipopagoDto) {
    await this.findOne(id);

    const tipopago = await prisma.tipopago.update({
      where: { id },
      data: updateTipopagoDto,
    });

    return tipopago;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.tipopago.delete({ where: { id } });
  }
}
