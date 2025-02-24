/*
  Warnings:

  - You are about to drop the `_NegocioToProducto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NegocioToProducto" DROP CONSTRAINT "_NegocioToProducto_A_fkey";

-- DropForeignKey
ALTER TABLE "_NegocioToProducto" DROP CONSTRAINT "_NegocioToProducto_B_fkey";

-- DropTable
DROP TABLE "_NegocioToProducto";

-- CreateTable
CREATE TABLE "_ProductoNegocios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductoNegocios_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductoNegocios_B_index" ON "_ProductoNegocios"("B");

-- AddForeignKey
ALTER TABLE "_ProductoNegocios" ADD CONSTRAINT "_ProductoNegocios_A_fkey" FOREIGN KEY ("A") REFERENCES "negocios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductoNegocios" ADD CONSTRAINT "_ProductoNegocios_B_fkey" FOREIGN KEY ("B") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
