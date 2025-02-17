/*
  Warnings:

  - Added the required column `encargado_id` to the `negocios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "negocios" DROP CONSTRAINT "negocios_distribuidor_id_fkey";

-- AlterTable
ALTER TABLE "negocios" ADD COLUMN     "encargado_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "personas" ADD COLUMN     "negocioId" INTEGER;

-- CreateTable
CREATE TABLE "Encargado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "negocio_id" INTEGER,

    CONSTRAINT "Encargado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_negocioId_fkey" FOREIGN KEY ("negocioId") REFERENCES "negocios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "negocios" ADD CONSTRAINT "negocios_distribuidor_id_fkey" FOREIGN KEY ("distribuidor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "negocios" ADD CONSTRAINT "negocios_encargado_id_fkey" FOREIGN KEY ("encargado_id") REFERENCES "Encargado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encargado" ADD CONSTRAINT "Encargado_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encargado" ADD CONSTRAINT "Encargado_negocio_id_fkey" FOREIGN KEY ("negocio_id") REFERENCES "negocios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
