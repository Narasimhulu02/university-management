-- Attach classrooms to a university and enforce per-university uniqueness
-- Safe migration: add column nullable first to avoid failures on existing data
ALTER TABLE `classroom` ADD COLUMN `university_id` INT NULL;

-- Add foreign key to university
ALTER TABLE `classroom`
  ADD CONSTRAINT `fk_classroom_university`
  FOREIGN KEY (`university_id`) REFERENCES `university`(`university_id`)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

-- Prevent duplicate rooms within the same university
CREATE UNIQUE INDEX `idx_classroom_uni_build_room`
  ON `classroom` (`university_id`, `building`, `room_number`);
