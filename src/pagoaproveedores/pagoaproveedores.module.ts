import { Module } from '@nestjs/common';
import { PagoaproveedoresService } from './pagoaproveedores.service';
import { PagoaproveedoresController } from './pagoaproveedores.controller';

@Module({
  controllers: [PagoaproveedoresController],
  providers: [PagoaproveedoresService],
})
export class PagoaproveedoresModule {}
