import { Module } from '@nestjs/common';
import { ProdpresentaciontamanosService } from './prodpresentaciontamanos.service';
import { ProdpresentaciontamanosController } from './prodpresentaciontamanos.controller';

@Module({
  controllers: [ProdpresentaciontamanosController],
  providers: [ProdpresentaciontamanosService],
})
export class ProdpresentaciontamanosModule {}
