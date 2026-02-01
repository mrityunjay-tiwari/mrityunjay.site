/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ProjectNote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "BlogType" AS ENUM ('TECH', 'THOUGHTS');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "type" "BlogType" NOT NULL DEFAULT 'TECH';

-- CreateTable
CREATE TABLE "NewsletterSubscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsletterSubscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscribers_email_key" ON "NewsletterSubscribers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectNote_slug_key" ON "ProjectNote"("slug");
