import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRubroDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
