/*
  Warnings:

  - You are about to drop the column `prodpresentacion_id` on the `prodpresentaciontamanos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "prodpresentaciontamanos" DROP CONSTRAINT "prodpresentaciontamanos_prodpresentacion_id_fkey";

-- AlterTable
ALTER TABLE "prodpresentaciontamanos" DROP COLUMN "prodpresentacion_id";

-- CreateTable
CREATE TABLE "_ProdpresentacionProdpresentaciontamanos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdpresentacionProdpresentaciontamanos_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProdpresentacionProdpresentaciontamanos_B_index" ON "_ProdpresentacionProdpresentaciontamanos"("B");

-- AddForeignKey
ALTER TABLE "_ProdpresentacionProdpresentaciontamanos" ADD CONSTRAINT "_ProdpresentacionProdpresentaciontamanos_A_fkey" FOREIGN KEY ("A") REFERENCES "prodpresentacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdpresentacionProdpresentaciontamanos" ADD CONSTRAINT "_ProdpresentacionProdpresentaciontamanos_B_fkey" FOREIGN KEY ("B") REFERENCES "prodpresentaciontamanos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
