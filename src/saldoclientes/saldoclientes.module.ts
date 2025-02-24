import { Module } from '@nestjs/common';
import { SaldoclientesService } from './saldoclientes.service';
import { SaldoclientesController } from './saldoclientes.controller';

@Module({
  controllers: [SaldoclientesController],
  providers: [SaldoclientesService],
})
export class SaldoclientesModule {}
