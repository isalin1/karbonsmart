/*
  Warnings:

  - You are about to drop the column `rol_id` on the `personas` table. All the data in the column will be lost.
  - Added the required column `rol_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "personas" DROP CONSTRAINT "personas_rol_id_fkey";

-- AlterTable
ALTER TABLE "personas" DROP COLUMN "rol_id";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "rol_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rols"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
