import { PartialType } from '@nestjs/mapped-types';
import { CreatePagodeclienteDto } from './create-pagodecliente.dto';

export class UpdatePagodeclienteDto extends PartialType(CreatePagodeclienteDto) {}
