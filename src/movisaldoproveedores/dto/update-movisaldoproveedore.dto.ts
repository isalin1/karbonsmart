import { PartialType } from '@nestjs/mapped-types';
import { CreateMovisaldoproveedoreDto } from './create-movisaldoproveedore.dto';

export class UpdateMovisaldoproveedoreDto extends PartialType(CreateMovisaldoproveedoreDto) {}
