-- AlterTable
ALTER TABLE `Post` ADD COLUMN `favoritedById` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_favoritedById_fkey` FOREIGN KEY (`favoritedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
