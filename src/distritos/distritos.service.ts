import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class DistritosService {

  async create(createDistritoDto: CreateDistritoDto) {
    const {nombre, provinciaId}=createDistritoDto
        const provincia = await prisma.provincia.findUnique({where: {
          id:provinciaId
        }})
        if(!provincia) { 
          throw new NotFoundException("no se encontro un elemento")
        }
        
        return await prisma.distrito.create({
          data:{
            nombre: nombre,
            provinciaId: provinciaId
          }
        }) ;
  }

  async findAll() {
    return await prisma.distrito.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} distrito`;
  }

  async findByProvincia(provinciaId: number) {
    return await prisma.distrito.findMany({
      where: {provinciaId},
    });
    }
  update(id: number, updateDistritoDto: UpdateDistritoDto) {
    return `This action updates a #${id} distrito`;
  }

  remove(id: number) {
    return `This action removes a #${id} distrito`;
  }
}
