import { PartialType } from '@nestjs/mapped-types';
import { CreatePuntoventaDto } from './create-puntoventa.dto';

export class UpdatePuntoventaDto extends PartialType(CreatePuntoventaDto) {}
