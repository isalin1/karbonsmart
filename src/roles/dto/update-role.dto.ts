//import { PartialType } from '@nestjs/mapped-types';
//import { CreateRoleDto } from './create-role.dto';

import { IsNotEmpty, IsString } from 'class-validator';

//export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
export class UpdateRoleDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
