//import { PartialType } from '@nestjs/mapped-types';
//import { CreateTipomovimientoDto } from './create-tipomovimiento.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateTipomovimientoDto extends PartialType(CreateTipomovimientoDto) {}
export class UpdateTipomovimientoDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
