/*
  Warnings:

  - Changed the type of `techStack` on the `ProjectNote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ProjectNote" DROP COLUMN "techStack",
ADD COLUMN     "techStack" JSONB NOT NULL;
