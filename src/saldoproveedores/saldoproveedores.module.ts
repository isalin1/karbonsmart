import { Module } from '@nestjs/common';
import { SaldoproveedoresService } from './saldoproveedores.service';
import { SaldoproveedoresController } from './saldoproveedores.controller';

@Module({
  controllers: [SaldoproveedoresController],
  providers: [SaldoproveedoresService],
})
export class SaldoproveedoresModule {}
