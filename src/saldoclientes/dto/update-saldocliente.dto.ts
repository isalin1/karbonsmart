import { PartialType } from '@nestjs/mapped-types';
import { CreateSaldoclienteDto } from './create-saldocliente.dto';

export class UpdateSaldoclienteDto extends PartialType(CreateSaldoclienteDto) {}
