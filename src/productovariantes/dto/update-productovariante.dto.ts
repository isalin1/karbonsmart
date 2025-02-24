import { PartialType } from '@nestjs/mapped-types';
import { CreateProductovarianteDto } from './create-productovariante.dto';

export class UpdateProductovarianteDto extends PartialType(CreateProductovarianteDto) {}
