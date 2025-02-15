import { Module } from '@nestjs/common';
import { TipomovistocksService } from './tipomovistocks.service';
import { TipomovistocksController } from './tipomovistocks.controller';

@Module({
  controllers: [TipomovistocksController],
  providers: [TipomovistocksService],
})
export class TipomovistocksModule {}
