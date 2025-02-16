//import { PartialType } from '@nestjs/mapped-types';
//import { CreateTipoduenonegocioDto } from './create-tipoduenonegocio.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateTipoduenonegocioDto extends PartialType(CreateTipoduenonegocioDto) {}
export class UpdateTipoduenonegocioDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
