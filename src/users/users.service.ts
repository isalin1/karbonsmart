import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { email, personaId, rolId } = createUserDto;

    //validar si existe persona con personaId
    const persona = await prisma.persona.findFirst({
      where: {
        id: personaId,
      },
    });
    
    if (!persona) {
      throw new NotFoundException(
        `no se encontro una persona con el id ${personaId}`,
      );
    }

    //validar si existe rol con rolId
    const rol = await prisma.rol.findFirst({
      where: {
        id: rolId,
      },
    });
    if (!rol) {
      throw new NotFoundException(`no se encontro un rol con el id ${rolId}`);
    }
    
    //validar si ya existe persona usando el email que debe ser unico
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('El email ya está en uso');
    }

    return await prisma.user.create({
      data: createUserDto});
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(
        `No se encontro un elemento con email ${email}`,
      );
    }

    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
