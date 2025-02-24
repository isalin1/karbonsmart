/*
  Warnings:

  - You are about to drop the `_NegocioToProdpresentaciontamano` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NegocioToProdpresentaciontamano" DROP CONSTRAINT "_NegocioToProdpresentaciontamano_A_fkey";

-- DropForeignKey
ALTER TABLE "_NegocioToProdpresentaciontamano" DROP CONSTRAINT "_NegocioToProdpresentaciontamano_B_fkey";

-- DropTable
DROP TABLE "_NegocioToProdpresentaciontamano";

-- CreateTable
CREATE TABLE "_ProdpresentaciontamanoNegocios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdpresentaciontamanoNegocios_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProdpresentaciontamanoNegocios_B_index" ON "_ProdpresentaciontamanoNegocios"("B");

-- AddForeignKey
ALTER TABLE "_ProdpresentaciontamanoNegocios" ADD CONSTRAINT "_ProdpresentaciontamanoNegocios_A_fkey" FOREIGN KEY ("A") REFERENCES "negocios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdpresentaciontamanoNegocios" ADD CONSTRAINT "_ProdpresentaciontamanoNegocios_B_fkey" FOREIGN KEY ("B") REFERENCES "prodpresentaciontamanos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
