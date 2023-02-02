/*
  Warnings:

  - You are about to drop the column `teamId` on the `TeamsCategories` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TeamsCategories" DROP CONSTRAINT "TeamsCategories_teamId_fkey";

-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TeamsCategories" DROP COLUMN "teamId";

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TeamsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
