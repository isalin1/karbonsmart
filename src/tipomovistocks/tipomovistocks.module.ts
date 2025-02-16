import { Module } from '@nestjs/common';
import { TipomovistocksService } from './tipomovistocks.service';
import { TipomovistocksController } from './tipomovistocks.controller';

@Module({
  controllers: [TipomovistocksController],
  providers: [TipomovistocksService],
  exports: [TipomovistocksService],
})
export class TipomovistocksModule {}
