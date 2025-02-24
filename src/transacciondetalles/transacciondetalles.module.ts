import { Module } from '@nestjs/common';
import { TransacciondetallesService } from './transacciondetalles.service';
import { TransacciondetallesController } from './transacciondetalles.controller';

@Module({
  controllers: [TransacciondetallesController],
  providers: [TransacciondetallesService],
})
export class TransacciondetallesModule {}
