import { Module } from '@nestjs/common';
import { ProdpresentacionService } from './prodpresentacion.service';
import { ProdpresentacionController } from './prodpresentacion.controller';

@Module({
  controllers: [ProdpresentacionController],
  providers: [ProdpresentacionService],
})
export class ProdpresentacionModule {}
