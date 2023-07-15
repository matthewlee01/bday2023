-- CreateTable
CREATE TABLE "Attendee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "note" TEXT,
    "time" TEXT,

    CONSTRAINT "Attendee_pkey" PRIMARY KEY ("id")
);
