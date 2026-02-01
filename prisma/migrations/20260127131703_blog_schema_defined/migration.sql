/*
  Warnings:

  - Added the required column `clapCount` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteOn` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordCount` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `blogTitle` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "clapCount" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "websiteOn" TEXT NOT NULL,
ADD COLUMN     "wordCount" INTEGER NOT NULL,
ALTER COLUMN "blogTitle" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
