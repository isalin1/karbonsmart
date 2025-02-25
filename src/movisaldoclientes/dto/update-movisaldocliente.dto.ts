import { PartialType } from '@nestjs/mapped-types';
import { CreateMovisaldoclienteDto } from './create-movisaldocliente.dto';

export class UpdateMovisaldoclienteDto extends PartialType(CreateMovisaldoclienteDto) {}
