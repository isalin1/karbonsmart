import { Module } from '@nestjs/common';
import { MovisaldoproveedoresService } from './movisaldoproveedores.service';
import { MovisaldoproveedoresController } from './movisaldoproveedores.controller';

@Module({
  controllers: [MovisaldoproveedoresController],
  providers: [MovisaldoproveedoresService],
})
export class MovisaldoproveedoresModule {}
