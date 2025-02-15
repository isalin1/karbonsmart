import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoduenonegocioDto } from './dto/create-tipoduenonegocio.dto';
import { UpdateTipoduenonegocioDto } from './dto/update-tipoduenonegocio.dto';
import { prisma } from 'src/prisma/client';
import { error } from 'console';

@Injectable()
export class TipoduenonegocioService {
  async create(createTipoduenonegocioDto: CreateTipoduenonegocioDto) {
    return await prisma.tipoduenonegocio.create({
          data:createTipoduenonegocioDto
        });
  }

  async findAll() {
    return await prisma.tipoduenonegocio.findMany();
  }

  async findOne(id: number) {
    const tipoduenonegocio= await prisma.tipoduenonegocio.findUnique({where:{id}});
            if(!tipoduenonegocio?.id) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
            return tipoduenonegocio;
  }

  async update(id: number, updateTipoduenonegocioDto: UpdateTipoduenonegocioDto) {
    try{
      const tipoduenonegocio = await prisma.tipoduenonegocio.update({
        where: {id},
        data:updateTipoduenonegocioDto
      })
      return tipoduenonegocio;
    }
      catch (error) {
        if(error.code === 'P2025')
        throw new NotFoundException(`No se encontró un elemento con id ${id}`);
      }
      throw error;
  }

  async remove(id: number) {
    const tipoduenonegocio= await prisma.tipoduenonegocio.findUnique({where:{id}});
    if(!tipoduenonegocio) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.tipoduenonegocio.delete({where:{id}}); 
  }
}
