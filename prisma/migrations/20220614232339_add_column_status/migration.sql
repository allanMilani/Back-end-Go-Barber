-- CreateEnum
CREATE TYPE "TrailStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "appointments" ADD COLUMN     "status" "TrailStatus" NOT NULL DEFAULT E'ACTIVE';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "TrailStatus" NOT NULL DEFAULT E'ACTIVE';
