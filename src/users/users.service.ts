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
    const persona = await prisma.persona.findUnique({
      where: {
        id: personaId,
      },
    });
    if (!persona) {
      throw new NotFoundException(
        `no se encontro una persona con el id ${personaId}`,
      );
    }

    const rol = await prisma.rol.findUnique({
      where: {
        id: rolId,
      },
    });
    if (!rol) {
      throw new NotFoundException(`no se encontro un rol con el id ${rolId}`);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('El email ya está en uso');
    }
    return prisma.user.create({
      data: createUserDto,
    });
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
