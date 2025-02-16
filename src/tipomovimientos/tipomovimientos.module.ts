import { Module } from '@nestjs/common';
import { TipomovimientosService } from './tipomovimientos.service';
import { TipomovimientosController } from './tipomovimientos.controller';

@Module({
  controllers: [TipomovimientosController],
  providers: [TipomovimientosService],
  exports: [TipomovimientosService],
})
export class TipomovimientosModule {}
