//import { PartialType } from '@nestjs/mapped-types';
//import { CreateTipoproductoDto } from './create-tipoproducto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateTipoproductoDto extends PartialType(CreateTipoproductoDto) {}
export class UpdateTipoproductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
