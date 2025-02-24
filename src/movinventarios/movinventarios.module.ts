import { Module } from '@nestjs/common';
import { MovinventariosService } from './movinventarios.service';
import { MovinventariosController } from './movinventarios.controller';

@Module({
  controllers: [MovinventariosController],
  providers: [MovinventariosService],
})
export class MovinventariosModule {}
