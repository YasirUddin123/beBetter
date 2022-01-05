const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const pg = require('pg');
// const Pool = pg.Pool;
// const pool = new Pool ({
//     host: 'localhost',
//     database: 'beBetter_app'
// })

router.get('/', (req, res) => {
  // GET route code here
});

 router.post('/',  (req, res) => {
  console.log(`Adding physical activity results`, req.body);
  const sqlText = `INSERT INTO "rating"
  ("physical_activity")
  VALUES
  ($1);
  `;
  const sqlValue = [
      req.body.physical_activity
  ];
  pool.query(sqlText, sqlValue)
  .then((dbResult) => {
      console.log('insert success', dbResult);
      res.sendStatus(201);
  })
  .catch((dbErr) => {
      console.log(`Error adding feedback`, dbErr);
      res.sendStatus(500);
  });
});

module.exports = router;
