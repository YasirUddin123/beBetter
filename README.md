
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
  - Make a new git branch to 'initialize' my work [x]
  - Add an .env file to project directory [x]

#### Front-End:
  - Make sure all files are sourced in correctly [x]

#### Back-End:
  - Run npm install --yes [x]
  - Make sure express and pg are installed as well [x]
  - Create a database using SQL via Postico [x]
  - Create a 'user' table using SQL via Postico [x]
  - Create a 'rating' table using SQl via Postico [x]
  - Include queries on my database.sql text file [x]
  - Wire up database connection in pool.js file [x]
  - Make sure Express server is functional in server.js [x]

### Step 2: Develop Features
  * Log-in and Registration [x]
    * Store in database [x]

  * Home Page
    * Route to Recorded Entries [x]
    * Route to Start Survey [x]
    * Route to Graph [x]
    * Ability to Log Out [x]
    * Incorporate Current Date [x]

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
