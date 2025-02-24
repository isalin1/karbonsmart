import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionprocesadaDto } from './create-transaccionprocesada.dto';

export class UpdateTransaccionprocesadaDto extends PartialType(CreateTransaccionprocesadaDto) {}
