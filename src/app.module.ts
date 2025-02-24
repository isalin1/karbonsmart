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
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EncargadosModule } from './encargados/encargados.module';
import { NegociosModule } from './negocios/negocios.module';
import { PuntoventasModule } from './puntoventas/puntoventas.module';
import { ProductosModule } from './productos/productos.module';
import { ProdpresentacionModule } from './prodpresentacion/prodpresentacion.module';
import { ProdpresentaciontamanosModule } from './prodpresentaciontamanos/prodpresentaciontamanos.module';
import { ProductovariantesModule } from './productovariantes/productovariantes.module';
import { TransaccionesModule } from './transacciones/transacciones.module';

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
    UsersModule,
    AuthModule,
    EncargadosModule,
    NegociosModule,
    PuntoventasModule,
    ProductosModule,
    ProdpresentacionModule,
    ProdpresentaciontamanosModule,
    ProductovariantesModule,
    TransaccionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
