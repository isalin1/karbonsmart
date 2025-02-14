import { Injectable } from '@nestjs/common';
import { CreateRubroDto } from './dto/create-rubro.dto';
import { UpdateRubroDto } from './dto/update-rubro.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class RubrosService {

  async create(createRubroDto: CreateRubroDto) {
    return await prisma.rubro.create({
      data:createRubroDto
    });
  }

  async findAll() {
    return await prisma.rubro.findMany();
  }

  async findOne(id: number) {
    return await prisma.rubro.findUnique({where:{id}});
  }

  async update(id: number, updateRubroDto: UpdateRubroDto) {
    return await prisma.rubro.update({
      where: {id},
      data:updateRubroDto
    });
  }

  async remove(id: number) {
    return await prisma.rubro.delete({where:{id}});
  }
}
