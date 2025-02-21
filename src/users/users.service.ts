import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prisma } from 'src/prisma/client';
import { Rol } from '@prisma/client';
import { Persona } from '@prisma/client';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {

    
    const { email, personaId, rolId, password } = createUserDto;
    /*
    const persona = await prisma.persona.findFirst({
      where: {
        id: personaId,
      },
    });
    */
    // validacion de email en uso o persona que ya tiene usuario
    const existingUser = await prisma.user.findFirst({
      where: { 
      OR: [
        { personaId }, { email }
      ]
    }
    });

    if (existingUser) {
      throw new ConflictException('La persona ya tiene usuario o el email esta en uso');
    }
    //validar que personaId existe en tabla personas
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

    let rol: Rol | null;

    if (rolId) {
      rol = await prisma.rol.findFirst({
        where: {
          id: rolId,
        },
      });
    } else {
      rol = await prisma.rol.findFirst({
        where: {
          tipo: 'distribuidor',
        },
      });
    }

    if (!rol) {
      throw new NotFoundException(`no se encontro un rol con el id ${rolId}`);
    }
/*
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('El email ya está en uso');
    }
*/
    return await prisma.user.create({
      data: {
        email,
        personaId,
        rolId: rol.id,
        password,
      },
    });
  }

  async findAll() {
    return await prisma.user.findMany();
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
