import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipopagoDto } from './dto/create-tipopago.dto';
import { UpdateTipopagoDto } from './dto/update-tipopago.dto';
import { prisma } from 'src/prisma/client';
import { error } from 'console';

@Injectable()
export class TipopagosService {

  async create(createTipopagoDto: CreateTipopagoDto) {
    return await prisma.tipopago.create({
      data:createTipopagoDto
    });
  }

  async findAll() {
    return await prisma.tipopago.findMany();
  }

  async findOne(id: number) {
   const tipopago= await prisma.tipopago.findUnique({where:{id}});
                   if(!tipopago?.id) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
                   return tipopago;
  }

  async update(id: number, updateTipopagoDto: UpdateTipopagoDto) {
    try{
      const tipopago = await prisma.tipopago.update({
        where: {id},
        data:updateTipopagoDto
      })
      return tipopago;
    }
      catch (error) {
        if(error.code === 'P2025')
        throw new NotFoundException(`No se encontró un elemento con id ${id}`);
      }
      throw error;
  }

  async remove(id: number) {
    const tipopago= await prisma.tipopago.findUnique({where:{id}});
    if(!tipopago) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.tipopago.delete({where:{id}});
  }
}
