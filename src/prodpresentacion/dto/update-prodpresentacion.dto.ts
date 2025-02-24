import { PartialType } from '@nestjs/mapped-types';
import { CreateProdpresentacionDto } from './create-prodpresentacion.dto';

export class UpdateProdpresentacionDto extends PartialType(CreateProdpresentacionDto) {}
