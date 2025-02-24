/*
  Warnings:

  - Added the required column `producto_id` to the `transacciondetalles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transacciondetalles" ADD COLUMN     "producto_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transacciondetalles" ADD CONSTRAINT "transacciondetalles_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
