//import { PartialType } from '@nestjs/mapped-types';
//import { CreateTipopagoDto } from './create-tipopago.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateTipopagoDto extends PartialType(CreateTipopagoDto) {}
export class UpdateTipopagoDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
