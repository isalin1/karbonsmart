import { Module } from '@nestjs/common';
import { ProductovariantesService } from './productovariantes.service';
import { ProductovariantesController } from './productovariantes.controller';

@Module({
  controllers: [ProductovariantesController],
  providers: [ProductovariantesService],
})
export class ProductovariantesModule {}
