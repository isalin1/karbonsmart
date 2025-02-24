import { PartialType } from '@nestjs/mapped-types';
import { CreatePagoaproveedoreDto } from './create-pagoaproveedore.dto';

export class UpdatePagoaproveedoreDto extends PartialType(CreatePagoaproveedoreDto) {}
