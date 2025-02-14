import { Module } from '@nestjs/common';
import { RubrosModule } from './rubros/rubros.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [RubrosModule, RolesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
