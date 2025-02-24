import { Module } from '@nestjs/common';
import { TransaccionprocesadasService } from './transaccionprocesadas.service';
import { TransaccionprocesadasController } from './transaccionprocesadas.controller';

@Module({
  controllers: [TransaccionprocesadasController],
  providers: [TransaccionprocesadasService],
})
export class TransaccionprocesadasModule {}
