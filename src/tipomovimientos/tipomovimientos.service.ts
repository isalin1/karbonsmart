import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipomovimientoDto } from './dto/create-tipomovimiento.dto';
import { UpdateTipomovimientoDto } from './dto/update-tipomovimiento.dto';
import { prisma } from 'src/prisma/client';
import { error } from 'console';

@Injectable()
export class TipomovimientosService {

  async create(createTipomovimientoDto: CreateTipomovimientoDto) {
    return await prisma.tipomovimiento.create({
      data:createTipomovimientoDto
    });
  }

  async findAll() {
    return await prisma.tipomovimiento.findMany();
  }

  async findOne(id: number) {
    const tipomovimiento = await prisma.tipomovimiento.findUnique({where:{id}});
    if(!tipomovimiento?.id) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return tipomovimiento;
  }

  async update(id: number, updateTipomovimientoDto: UpdateTipomovimientoDto) {
    try{
      const tipomovimiento = await prisma.tipomovimiento.update({
        where: {id},
        data:updateTipomovimientoDto
      })
      return tipomovimiento;
    }
      catch (error) {
        if(error.code === 'P2025')
        throw new NotFoundException(`No se encontró un elemento con id ${id}`);
      }
      throw error;
  }

  async remove(id: number) {
    const tipomovimiento= await prisma.tipomovimiento.findUnique({where:{id}});
    if(!tipomovimiento) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.tipomovimiento.delete({where:{id}});
  }
}
