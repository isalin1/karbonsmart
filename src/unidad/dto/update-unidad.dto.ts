//import { PartialType } from '@nestjs/mapped-types';
//import { CreateUnidadDto } from './create-unidad.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateUnidadDto extends PartialType(CreateUnidadDto) {}
export class UpdateUnidadDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
