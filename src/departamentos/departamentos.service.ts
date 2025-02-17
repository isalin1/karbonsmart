import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class DepartamentosService {
  async create(createDepartamentoDto: CreateDepartamentoDto) {
    return await prisma.departamento.create({ data: createDepartamentoDto });
  }

  findAll() {
    return `This action returns all departamentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }

  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
