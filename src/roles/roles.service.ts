import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class RolesService {
  async create(createRoleDto: CreateRoleDto) {
    return await prisma.rol.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return await prisma.rol.findMany();
  }

  async findOne(id: number) {
    const rol = await prisma.rol.findUnique({ where: { id } });

    if (!rol) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return rol;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.findOne(id);

    const rol = await prisma.rol.update({
      where: { id },
      data: updateRoleDto,
    });

    return rol;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.rol.delete({ where: { id } });
  }
}
