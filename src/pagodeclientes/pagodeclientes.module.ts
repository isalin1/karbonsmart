import { Module } from '@nestjs/common';
import { PagodeclientesService } from './pagodeclientes.service';
import { PagodeclientesController } from './pagodeclientes.controller';

@Module({
  controllers: [PagodeclientesController],
  providers: [PagodeclientesService],
})
export class PagodeclientesModule {}
