import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipopagoDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
