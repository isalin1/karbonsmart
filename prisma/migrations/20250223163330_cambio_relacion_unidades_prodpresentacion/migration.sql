/*
  Warnings:

  - You are about to drop the `_ProdpresentacionToUnidad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProdpresentacionToUnidad" DROP CONSTRAINT "_ProdpresentacionToUnidad_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProdpresentacionToUnidad" DROP CONSTRAINT "_ProdpresentacionToUnidad_B_fkey";

-- DropTable
DROP TABLE "_ProdpresentacionToUnidad";

-- CreateTable
CREATE TABLE "_ProdpresentacionUnidades" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdpresentacionUnidades_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProdpresentacionUnidades_B_index" ON "_ProdpresentacionUnidades"("B");

-- AddForeignKey
ALTER TABLE "_ProdpresentacionUnidades" ADD CONSTRAINT "_ProdpresentacionUnidades_A_fkey" FOREIGN KEY ("A") REFERENCES "prodpresentacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdpresentacionUnidades" ADD CONSTRAINT "_ProdpresentacionUnidades_B_fkey" FOREIGN KEY ("B") REFERENCES "unidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;
