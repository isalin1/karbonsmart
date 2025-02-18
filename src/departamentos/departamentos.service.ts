import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class DepartamentosService {
  
  async create(createDepartamentoDto: CreateDepartamentoDto) {
    return await prisma.departamento.create({ data: createDepartamentoDto });
  }

  async findAll() {
    return await prisma.departamento.findMany();
  }

  async findOne(id: number) {
    const departamento = await prisma.departamento.findUnique({where: {id}});
    if(!departamento){
      throw new NotFoundException(`No se encontro elemento con id ${id}`)
    }
        return departamento;
  }

  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
