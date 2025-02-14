/*
  Warnings:

  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Tipotransaccion" AS ENUM ('COMPRA', 'VENTA');

-- DropTable
DROP TABLE "roles";

-- CreateTable
CREATE TABLE "rols" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rols_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departamentos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provincias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "departamento_id" INTEGER NOT NULL,

    CONSTRAINT "provincias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distritos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "provincia_id" INTEGER NOT NULL,

    CONSTRAINT "distritos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "departamento_id" INTEGER NOT NULL,
    "provincia_id" INTEGER NOT NULL,
    "distrito_id" INTEGER NOT NULL,
    "rol_id" INTEGER NOT NULL,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "persona_id" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rubros" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rubros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoduenonegocios" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipoduenonegocios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "negocios" (
    "id" SERIAL NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "ruc" TEXT,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "rubro_id" INTEGER NOT NULL,
    "tipoduenonegocio_id" INTEGER NOT NULL,
    "distribuidor_id" INTEGER NOT NULL,

    CONSTRAINT "negocios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puntoventas" (
    "id" SERIAL NOT NULL,
    "nombrecomercial" TEXT NOT NULL,
    "direcion" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "negocio_id" INTEGER NOT NULL,
    "encargado_id" INTEGER NOT NULL,
    "departamento_id" INTEGER NOT NULL,
    "provincia_id" INTEGER NOT NULL,
    "distrito_id" INTEGER NOT NULL,

    CONSTRAINT "puntoventas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoproductos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipoproductos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "tipoproducto_id" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "unidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prodpresentacion" (
    "id" SERIAL NOT NULL,
    "empaque" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prodpresentacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prodpresentaciontamanos" (
    "id" SERIAL NOT NULL,
    "tamano" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "prodpresentacion_id" INTEGER NOT NULL,

    CONSTRAINT "prodpresentaciontamanos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productovariantes" (
    "id" SERIAL NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "preciosinigv" DOUBLE PRECISION NOT NULL,
    "precioconigv" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "producto_id" INTEGER NOT NULL,
    "prodpresentaciontamano_id" INTEGER NOT NULL,

    CONSTRAINT "productovariantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacciones" (
    "id" SERIAL NOT NULL,
    "fechaentrega" TIMESTAMP(3) NOT NULL,
    "valortrans" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,
    "tipotrans" "Tipotransaccion" NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "puntoventa_id" INTEGER NOT NULL,

    CONSTRAINT "transacciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacciondetalles" (
    "id" SERIAL NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "preciounit" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "transaccion_id" INTEGER NOT NULL,

    CONSTRAINT "transacciondetalles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccionprocesadas" (
    "id" SERIAL NOT NULL,
    "valortransproc" DOUBLE PRECISION,
    "tipotrans" "Tipotransaccion" NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "transaccion_id" INTEGER NOT NULL,

    CONSTRAINT "transaccionprocesadas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipomovistocks" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipomovistocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movinventarios" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "razon" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "tipomovistock_id" INTEGER NOT NULL,
    "transaccion_id" INTEGER NOT NULL,
    "productovariante_id" INTEGER NOT NULL,

    CONSTRAINT "movinventarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarios" (
    "id" SERIAL NOT NULL,
    "stockfisico" INTEGER NOT NULL,
    "stockdisponible" INTEGER NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "productovariante_id" INTEGER NOT NULL,

    CONSTRAINT "inventarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipopagos" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipopagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipomovimientos" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipomovimientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagodeclientes" (
    "id" SERIAL NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "detalle" TEXT,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "tipopago_id" INTEGER NOT NULL,
    "puntoventa_id" INTEGER NOT NULL,

    CONSTRAINT "pagodeclientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movisaldoclientes" (
    "id" SERIAL NOT NULL,
    "movimiento_id" INTEGER NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "puntoventa_id" INTEGER NOT NULL,
    "tipomovimiento_id" INTEGER NOT NULL,

    CONSTRAINT "movisaldoclientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saldoclientes" (
    "id" SERIAL NOT NULL,
    "saldoactual" DOUBLE PRECISION NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "puntoventa_id" INTEGER NOT NULL,

    CONSTRAINT "saldoclientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagoaproveedores" (
    "id" SERIAL NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "detalle" TEXT,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "tipopago_id" INTEGER NOT NULL,
    "negocio_id" INTEGER NOT NULL,

    CONSTRAINT "pagoaproveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movisaldoproveedores" (
    "id" SERIAL NOT NULL,
    "movimiento_id" INTEGER NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "negocio_id" INTEGER NOT NULL,
    "tipomovimiento_id" INTEGER NOT NULL,

    CONSTRAINT "movisaldoproveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saldoproveedores" (
    "id" SERIAL NOT NULL,
    "saldoactual" DOUBLE PRECISION NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "negocio_id" INTEGER NOT NULL,

    CONSTRAINT "saldoproveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NegocioToProducto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NegocioToProducto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NegocioToProdpresentaciontamano" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NegocioToProdpresentaciontamano_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProdpresentacionToUnidad" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdpresentacionToUnidad_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "personas_dni_key" ON "personas"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_persona_id_key" ON "users"("persona_id");

-- CreateIndex
CREATE UNIQUE INDEX "negocios_distribuidor_id_key" ON "negocios"("distribuidor_id");

-- CreateIndex
CREATE UNIQUE INDEX "puntoventas_nombrecomercial_key" ON "puntoventas"("nombrecomercial");

-- CreateIndex
CREATE UNIQUE INDEX "transaccionprocesadas_transaccion_id_key" ON "transaccionprocesadas"("transaccion_id");

-- CreateIndex
CREATE INDEX "_NegocioToProducto_B_index" ON "_NegocioToProducto"("B");

-- CreateIndex
CREATE INDEX "_NegocioToProdpresentaciontamano_B_index" ON "_NegocioToProdpresentaciontamano"("B");

-- CreateIndex
CREATE INDEX "_ProdpresentacionToUnidad_B_index" ON "_ProdpresentacionToUnidad"("B");

-- AddForeignKey
ALTER TABLE "provincias" ADD CONSTRAINT "provincias_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distritos" ADD CONSTRAINT "distritos_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_distrito_id_fkey" FOREIGN KEY ("distrito_id") REFERENCES "distritos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rols"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "negocios" ADD CONSTRAINT "negocios_rubro_id_fkey" FOREIGN KEY ("rubro_id") REFERENCES "rubros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "negocios" ADD CONSTRAINT "negocios_tipoduenonegocio_id_fkey" FOREIGN KEY ("tipoduenonegocio_id") REFERENCES "tipoduenonegocios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "negocios" ADD CONSTRAINT "negocios_distribuidor_id_fkey" FOREIGN KEY ("distribuidor_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_negocio_id_fkey" FOREIGN KEY ("negocio_id") REFERENCES "negocios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_encargado_id_fkey" FOREIGN KEY ("encargado_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_departamento_id_fkey" FOREIGN KEY ("departamento_id") REFERENCES "departamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "provincias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_distrito_id_fkey" FOREIGN KEY ("distrito_id") REFERENCES "distritos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_tipoproducto_id_fkey" FOREIGN KEY ("tipoproducto_id") REFERENCES "tipoproductos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prodpresentaciontamanos" ADD CONSTRAINT "prodpresentaciontamanos_prodpresentacion_id_fkey" FOREIGN KEY ("prodpresentacion_id") REFERENCES "prodpresentacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productovariantes" ADD CONSTRAINT "productovariantes_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productovariantes" ADD CONSTRAINT "productovariantes_prodpresentaciontamano_id_fkey" FOREIGN KEY ("prodpresentaciontamano_id") REFERENCES "prodpresentaciontamanos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacciones" ADD CONSTRAINT "transacciones_puntoventa_id_fkey" FOREIGN KEY ("puntoventa_id") REFERENCES "puntoventas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacciondetalles" ADD CONSTRAINT "transacciondetalles_transaccion_id_fkey" FOREIGN KEY ("transaccion_id") REFERENCES "transacciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccionprocesadas" ADD CONSTRAINT "transaccionprocesadas_transaccion_id_fkey" FOREIGN KEY ("transaccion_id") REFERENCES "transacciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movinventarios" ADD CONSTRAINT "movinventarios_tipomovistock_id_fkey" FOREIGN KEY ("tipomovistock_id") REFERENCES "tipomovistocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movinventarios" ADD CONSTRAINT "movinventarios_transaccion_id_fkey" FOREIGN KEY ("transaccion_id") REFERENCES "transacciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movinventarios" ADD CONSTRAINT "movinventarios_productovariante_id_fkey" FOREIGN KEY ("productovariante_id") REFERENCES "productovariantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarios" ADD CONSTRAINT "inventarios_productovariante_id_fkey" FOREIGN KEY ("productovariante_id") REFERENCES "productovariantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagodeclientes" ADD CONSTRAINT "pagodeclientes_tipopago_id_fkey" FOREIGN KEY ("tipopago_id") REFERENCES "tipopagos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagodeclientes" ADD CONSTRAINT "pagodeclientes_puntoventa_id_fkey" FOREIGN KEY ("puntoventa_id") REFERENCES "puntoventas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movisaldoclientes" ADD CONSTRAINT "movisaldoclientes_puntoventa_id_fkey" FOREIGN KEY ("puntoventa_id") REFERENCES "puntoventas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movisaldoclientes" ADD CONSTRAINT "movisaldoclientes_tipomovimiento_id_fkey" FOREIGN KEY ("tipomovimiento_id") REFERENCES "tipomovimientos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saldoclientes" ADD CONSTRAINT "saldoclientes_puntoventa_id_fkey" FOREIGN KEY ("puntoventa_id") REFERENCES "puntoventas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagoaproveedores" ADD CONSTRAINT "pagoaproveedores_tipopago_id_fkey" FOREIGN KEY ("tipopago_id") REFERENCES "tipopagos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagoaproveedores" ADD CONSTRAINT "pagoaproveedores_negocio_id_fkey" FOREIGN KEY ("negocio_id") REFERENCES "negocios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movisaldoproveedores" ADD CONSTRAINT "movisaldoproveedores_negocio_id_fkey" FOREIGN KEY ("negocio_id") REFERENCES "negocios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movisaldoproveedores" ADD CONSTRAINT "movisaldoproveedores_tipomovimiento_id_fkey" FOREIGN KEY ("tipomovimiento_id") REFERENCES "tipomovimientos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saldoproveedores" ADD CONSTRAINT "saldoproveedores_negocio_id_fkey" FOREIGN KEY ("negocio_id") REFERENCES "negocios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NegocioToProducto" ADD CONSTRAINT "_NegocioToProducto_A_fkey" FOREIGN KEY ("A") REFERENCES "negocios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NegocioToProducto" ADD CONSTRAINT "_NegocioToProducto_B_fkey" FOREIGN KEY ("B") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NegocioToProdpresentaciontamano" ADD CONSTRAINT "_NegocioToProdpresentaciontamano_A_fkey" FOREIGN KEY ("A") REFERENCES "negocios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NegocioToProdpresentaciontamano" ADD CONSTRAINT "_NegocioToProdpresentaciontamano_B_fkey" FOREIGN KEY ("B") REFERENCES "prodpresentaciontamanos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdpresentacionToUnidad" ADD CONSTRAINT "_ProdpresentacionToUnidad_A_fkey" FOREIGN KEY ("A") REFERENCES "prodpresentacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdpresentacionToUnidad" ADD CONSTRAINT "_ProdpresentacionToUnidad_B_fkey" FOREIGN KEY ("B") REFERENCES "unidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;
