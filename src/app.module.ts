import { Module } from '@nestjs/common';
import { RubrosModule } from './rubros/rubros.module';
import { RolesModule } from './roles/roles.module';
import { TipoproductosModule } from './tipoproductos/tipoproductos.module';
import { TipoduenonegocioModule } from './tipoduenonegocio/tipoduenonegocio.module';
import { UnidadModule } from './unidad/unidad.module';

@Module({
  imports: [RubrosModule, RolesModule, TipoproductosModule, TipoduenonegocioModule, UnidadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
