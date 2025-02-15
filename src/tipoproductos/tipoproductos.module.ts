import { Module } from '@nestjs/common';
import { TipoproductosService } from './tipoproductos.service';
import { TipoproductosController } from './tipoproductos.controller';

@Module({
  controllers: [TipoproductosController],
  providers: [TipoproductosService],
})
export class TipoproductosModule {}
