import { PartialType } from '@nestjs/mapped-types';
import { CreateProdpresentaciontamanoDto } from './create-prodpresentaciontamano.dto';

export class UpdateProdpresentaciontamanoDto extends PartialType(CreateProdpresentaciontamanoDto) {}
