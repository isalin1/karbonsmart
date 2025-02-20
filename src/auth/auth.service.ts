import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { prisma } from 'src/prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

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

  login() {
    return 'login';
  }
}
