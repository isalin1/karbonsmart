import { Module } from '@nestjs/common';
import { MovisaldoclientesService } from './movisaldoclientes.service';
import { MovisaldoclientesController } from './movisaldoclientes.controller';

@Module({
  controllers: [MovisaldoclientesController],
  providers: [MovisaldoclientesService],
})
export class MovisaldoclientesModule {}
