import { Module } from '@nestjs/common';
import { TipoduenonegocioService } from './tipoduenonegocio.service';
import { TipoduenonegocioController } from './tipoduenonegocio.controller';

@Module({
  controllers: [TipoduenonegocioController],
  providers: [TipoduenonegocioService],
})
export class TipoduenonegocioModule {}
