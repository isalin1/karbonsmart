import {
  IsEmail,
  IsInt,
  IsString,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsInt()
  personaId: number;

  @IsInt()
  rolId: number;
}
