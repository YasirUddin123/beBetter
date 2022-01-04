
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Rating Table Query
CREATE TABLE "rating" (
    "id" SERIAL PRIMARY KEY,
    "physical_activity" VARCHAR(80) NOT NULL,
    "diet" VARCHAR(80) NOT NULL,
    "sleep" VARCHAR(80) NOT NULL,
    "mood" VARCHAR(80) NOT NULL,
    "comments" VARCHAR(1000) NOT NULL,
    "date" VARCHAR(1000) NOT NULL,
    "user_id" INT REFERENCES "user"
);
