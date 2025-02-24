import { PartialType } from '@nestjs/mapped-types';
import { CreateMovinventarioDto } from './create-movinventario.dto';

export class UpdateMovinventarioDto extends PartialType(CreateMovinventarioDto) {}
