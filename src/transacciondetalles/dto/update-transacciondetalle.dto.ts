import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacciondetalleDto } from './create-transacciondetalle.dto';

export class UpdateTransacciondetalleDto extends PartialType(CreateTransacciondetalleDto) {}
