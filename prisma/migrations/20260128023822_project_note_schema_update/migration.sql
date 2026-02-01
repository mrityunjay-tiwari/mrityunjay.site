/*
  Warnings:

  - Added the required column `description` to the `ProjectNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceCodeLink` to the `ProjectNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailImage` to the `ProjectNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoLink` to the `ProjectNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteLink` to the `ProjectNote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectNote" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "sourceCodeLink" TEXT NOT NULL,
ADD COLUMN     "techStack" TEXT[],
ADD COLUMN     "thumbnailImage" TEXT NOT NULL,
ADD COLUMN     "videoLink" TEXT NOT NULL,
ADD COLUMN     "websiteLink" TEXT NOT NULL;
