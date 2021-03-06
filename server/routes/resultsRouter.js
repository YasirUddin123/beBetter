const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


// Handles the GET route
// rejectUnauthenticated prevents anyone who is not logged in to use this
// This uses a sql query and values to get the data from db on postico
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
    SELECT "id", "physical_activity", "diet", "sleep", "mood", "comments",
      TO_CHAR("date", 'YYYY-MM-DD') AS "date" FROM "rating"
      WHERE "user_id"=$1
      ORDER BY "date" ASC;
    `;

  const queryValues = [req.user.id]
  pool.query(query, queryValues)
    .then( (result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all physical activity results', err);
      res.sendStatus(500)
    })
});

// Handles the get route for a particular submission
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  SELECT "id", "physical_activity", "diet", "sleep", "mood", "comments",
    TO_CHAR("date", 'YYYY-MM-DD') AS "date" FROM "rating"
    WHERE "id"=$1 AND "user_id"=$2
  `;
  const sqlValues = [
    req.params.id,
    req.user.id
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
    })
    .catch((dbErr) => {
      console.log('SELECT database error', dbErr);
      res.sendStatus(500);
    });
});

// Handles the post route for a particular submission
// sends the data to the db
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(`Adding physical activity results`, req.body);
  const sqlText = `INSERT INTO "rating"
  ("physical_activity", "diet", "sleep", "mood", "comments", "date", "user_id")
  VALUES
  ($1, $2, $3, $4, $5, $6, $7);
  `;
  const sqlValue = [
      req.body.physical_activity,
      req.body.diet,
      req.body.sleep,
      req.body.mood,
      req.body.comments,
      req.body.date,
      req.user.id
  ];
  pool.query(sqlText, sqlValue)
  .then((dbResult) => {
      console.log('insert success', dbResult);
      res.sendStatus(201);
  })
  .catch((dbErr) => {
      console.log(`Error adding physical activity`, dbErr);
      res.sendStatus(500);
  });
});

// Handles the delete route for a particular submission indicated by :id
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('Test Delete');
  const sqlText = `
    DELETE FROM "rating"
      WHERE "id"=$1 AND "user_id"=$2;
  `;
  const queryValues = [req.params.id, req.user.id];
pool.query(sqlText, queryValues)
  .then((dbRes)=> {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.error('ERROR: DELETE request failed:', dbErr);
    res.sendStatus(500);
  })
});

// Handles the put/edit route when a submission is updated
router.put('/:id', rejectUnauthenticated,(req, res) => {
  const sqlText = `
    UPDATE rating
      SET
        physical_activity = $1,
        diet = $2,
        sleep = $3,
        mood = $4,
        comments = $5
      WHERE id = $6 AND "user_id"=$7;
  `;
  const sqlValues = [
    req.body.physical_activity,
    req.body.diet,
    req.body.sleep,
    req.body.mood,
    req.body.comments,
    req.params.id,
    req.user.id
  ];
pool.query(sqlText, sqlValues)
  .then((dbRes)=> {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.error('ERROR: DELETE request failed:', dbErr);
    res.sendStatus(500);
  })
});

module.exports = router;
