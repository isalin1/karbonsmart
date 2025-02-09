/*
  Warnings:

  - You are about to drop the `Rol` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rol";

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);
