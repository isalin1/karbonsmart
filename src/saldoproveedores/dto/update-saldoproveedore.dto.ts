import { PartialType } from '@nestjs/mapped-types';
import { CreateSaldoproveedoreDto } from './create-saldoproveedore.dto';

export class UpdateSaldoproveedoreDto extends PartialType(CreateSaldoproveedoreDto) {}
