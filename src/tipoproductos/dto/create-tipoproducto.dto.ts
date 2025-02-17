import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoproductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
