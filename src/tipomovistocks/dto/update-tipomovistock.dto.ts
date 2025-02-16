//import { PartialType } from '@nestjs/mapped-types';
//import { CreateTipomovistockDto } from './create-tipomovistock.dto';
import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateTipomovistockDto extends PartialType(CreateTipomovistockDto) {}
export class UpdateTipomovistockDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
