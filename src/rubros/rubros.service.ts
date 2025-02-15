import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRubroDto } from './dto/create-rubro.dto';
import { UpdateRubroDto } from './dto/update-rubro.dto';
import { prisma } from 'src/prisma/client';
import { error } from 'console';

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
    const rubro = await prisma.rubro.findUnique({where:{id}});
    if(!rubro?.id) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
     return rubro
  }

  async update(id: number, updateRubroDto: UpdateRubroDto) {
    try{
      const rubro = await prisma.rubro.update({
        where: {id},
        data:updateRubroDto
      })
      return rubro;
    }
      catch (error) {
        if(error.code === 'P2025')
        throw new NotFoundException(`No se encontró un elemento con id ${id}`);
      }
      throw error;
    }

  async remove(id: number) {
    const rubro= await prisma.rubro.findUnique({where:{id}});
    if(!rubro) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.rubro.delete({where:{id}});
  }
}
