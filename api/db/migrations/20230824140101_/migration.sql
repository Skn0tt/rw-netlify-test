-- CreateEnum
CREATE TYPE "Manufacturer" AS ENUM ('FORD', 'TOYOTA', 'HONDA', 'BMW', 'MERCEDES', 'SAAB', 'PORSCHE');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE', 'GREEN', 'YELLOW', 'BLACK', 'WHITE', 'GREY');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "manufacturer" "Manufacturer" NOT NULL,
    "model" TEXT NOT NULL,
    "color" "Color" NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
