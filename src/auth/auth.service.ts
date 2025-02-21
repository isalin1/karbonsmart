import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { prisma } from 'src/prisma/client';
import { hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PersonasService } from 'src/personas/personas.service';
import { Persona, User } from '@prisma/client';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly personasService: PersonasService,
    private readonly jwtService: JwtService

  ) { }

  async register(registerDto: RegisterDto) {
    const { email, password, personaId } = registerDto;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('El email ya está en uso');
    }

    const passwordHashed = await hash(password, 10);

    return await this.usersService.create({
      email,
      personaId,
      password: passwordHashed,
    });
  }


  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('email no esta registrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('contraseña incorrecta');
    }

    const mitoken = await this.createToken(user);

    return {
      mitoken,
      email,
    }
  }

  async createToken(user: User & { persona: Persona }): Promise<any> {
    try {
      const payload: JwtPayload = {
        id: user.id,
        email: user.email,
        name: user.persona.nombre,
      };

      const token = await this.jwtService.signAsync(payload);

      return {
        accessToken: token
      };

    } catch (error) {
      console.log({
        error
      })

      throw new Error('No se pudo crear el token');
    }

  }
} 
