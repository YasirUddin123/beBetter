
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
    "physical_activity" INT,
    "diet" INT,
    "sleep" INT,
    "mood" INT,
    "comments" VARCHAR(1000),
    "date" DATE,
    "user_id" INT REFERENCES "user"
);
