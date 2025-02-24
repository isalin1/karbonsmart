import { Module } from '@nestjs/common';
import { PuntoventasService } from './puntoventas.service';
import { PuntoventasController } from './puntoventas.controller';

@Module({
  controllers: [PuntoventasController],
  providers: [PuntoventasService],
})
export class PuntoventasModule {}
