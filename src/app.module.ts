import { Module } from '@nestjs/common';
import { RubrosModule } from './rubros/rubros.module';
import { RolesModule } from './roles/roles.module';
import { TipoproductosModule } from './tipoproductos/tipoproductos.module';
import { TipoduenonegocioModule } from './tipoduenonegocio/tipoduenonegocio.module';
import { UnidadModule } from './unidad/unidad.module';
import { TipomovistocksModule } from './tipomovistocks/tipomovistocks.module';
import { TipopagosModule } from './tipopagos/tipopagos.module';
import { TipomovimientosModule } from './tipomovimientos/tipomovimientos.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { DistritosModule } from './distritos/distritos.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    RubrosModule,
    RolesModule,
    TipoproductosModule,
    TipoduenonegocioModule,
    UnidadModule,
    TipomovistocksModule,
    TipopagosModule,
    TipomovimientosModule,
    DepartamentosModule,
    ProvinciasModule,
    DistritosModule,
    PersonasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
