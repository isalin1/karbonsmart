import { Module } from '@nestjs/common';
import { TipopagosService } from './tipopagos.service';
import { TipopagosController } from './tipopagos.controller';

@Module({
  controllers: [TipopagosController],
  providers: [TipopagosService],
  exports: [TipopagosService],
})
export class TipopagosModule {}
