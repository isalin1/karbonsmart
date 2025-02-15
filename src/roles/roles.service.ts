import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { prisma } from 'src/prisma/client';
import { error } from 'console';

@Injectable()
export class RolesService {

  async create(createRoleDto: CreateRoleDto) {
    return await prisma.rol.create({
      data:createRoleDto
    });
  }

  async findAll() {
    return await prisma.rol.findMany();
  }

  async findOne(id: number) {
    const rol= await prisma.rol.findUnique({where:{id}});
    if(!rol?.id) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return rol
    
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try{
    const rol = await prisma.rol.update({
      where: {id},
      data:updateRoleDto
    })
    return rol;
  }
    catch (error) {
      if(error.code === 'P2025')
      throw new NotFoundException(`No se encontró un elemento con id ${id}`);
    }
    throw error;
  }
  

  async remove(id: number) {
    const rol= await prisma.rol.findUnique({where:{id}});
    if(!rol) throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    return await prisma.rol.delete({where:{id}});
  }
}
