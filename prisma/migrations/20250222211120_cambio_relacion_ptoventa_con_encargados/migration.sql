-- DropForeignKey
ALTER TABLE "puntoventas" DROP CONSTRAINT "puntoventas_encargado_id_fkey";

-- AddForeignKey
ALTER TABLE "puntoventas" ADD CONSTRAINT "puntoventas_encargado_id_fkey" FOREIGN KEY ("encargado_id") REFERENCES "Encargado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
