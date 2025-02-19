import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { prisma } from 'src/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const {email,password,personaId,rolId}=registerDto;

    //validar si ya existe persona usando el email que debe ser unico
    /*const existingUser = await prisma.user.findUnique({
          where: { email },
        });
        if (existingUser) {
          throw new ConflictException('El email ya está en uso');
        }
    */
    return await this.usersService.create({
        email,
        personaId,
        rolId,
        //implementacion de hasheo de paswword
        password: await bcrypt.hash(password,10)
    });
  }


  login() {
    return 'login';
  }
}
