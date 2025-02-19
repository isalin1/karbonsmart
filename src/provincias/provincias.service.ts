import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class ProvinciasService {
  async create(createProvinciaDto: CreateProvinciaDto) {
    const { nombre, departamentoId } = createProvinciaDto;
    const departamento = await prisma.departamento.findUnique({
      where: {
        id: departamentoId,
      },
    });
    if (!departamento) {
      throw new NotFoundException('no se encontro un elemento');
    }

    return await prisma.provincia.create({
      data: {
        nombre: nombre,
        departamentoId: departamentoId,
      },
    });
  }

  async findAll() {
    return await prisma.provincia.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} provincia`;
  }

  async findByDepartamento(departamentoId: number) {
    return await prisma.provincia.findMany({
      where: { departamentoId },
    });
  }

  update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    return `This action updates a #${id} provincia`;
  }

  remove(id: number) {
    return `This action removes a #${id} provincia`;
  }
}
