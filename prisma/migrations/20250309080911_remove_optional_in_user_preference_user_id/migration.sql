/*
  Warnings:

  - Made the column `userId` on table `UserPreference` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `UserPreference` DROP FOREIGN KEY `UserPreference_userId_fkey`;

-- AlterTable
ALTER TABLE `UserPreference` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UserPreference` ADD CONSTRAINT `UserPreference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
