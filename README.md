
# beBetter Application
beBetter is a full-stack web application revolved around health and wellness. This application uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Before starting, please make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## My High Level Development Plan
### Step 1: Initialize Project
  [x] Make a new git branch to 'initialize' my work
  [x] Add an .env file to project directory

#### Front-End:
  * Make sure all files are sourced in correctly

#### Back-End:
  * Run npm install --yes
  * Make sure express and pg are installed as well
  * Create a database using SQL via Postico
  * Create a 'user' table using SQL via Postico
  * Create a 'rating' table using SQl via Postico
  * Include queries on my database.sql text file
  * Wire up database connection in pool.js file
  * Make sure Express server is functional in server.js

### Step 2: Develop Features
  * Log-in and Registration
    * Store in database

  * Home Page
    * Route to Recorded Entries
    * Route to Start Survey
    * Route to Graph
    * Ability to Log Out
    * Incorporate Current Date

  * Survey
    * Provide questionnaire
    * Route to submit answers
    * Ability to Log Out

  * Physical Activity Results
    * Score
    * Photo
    * Encouragement / Advice
    * Ability to Log Out
    * Route to Next Results

  * Diet Results
    * Score
    * Photo
    * Encouragement / Advice
    * Ability to Log Out
    * Route to Next Results

  * Sleep Results
    * Score
    * Photo
    * Encouragement / Advice
    * Ability to Log Out
    * Route to Next Results

  * Mood Results
    * Score
    * Photo
    * Encouragement / Advice
    * Ability to Log Out
    * Route to Next Results

  * Recorded Entries
    * Log of past submissions
    * Ability to Edit or Delete
    * Route to Home
    * Route to Graph
    * Route to Log Out

  * Graph
    * Display graph of past numerical scores
      * Organized by total, physical activity, diet, sleep, or mood
    * Route to Home
    * Route to Graph
    * Route to Log Out

  * Style the application

### Step 3: Deploy to Heroku
