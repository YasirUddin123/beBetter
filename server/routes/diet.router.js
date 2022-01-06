// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();
// // const pg = require('pg');
// // const Pool = pg.Pool;
// // const pool = new Pool ({
// //     host: 'localhost',
// //     database: 'beBetter_app'
// // })

// router.get('/', (req, res) => {
//   const query = `SELECT * FROM rating`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all physical activity results', err);
//       res.sendStatus(500)
//     })
// });

// router.post('/',  (req, res) => {
//   console.log(`Adding physical activity results and diet`, req.body);
//   const sqlText = `INSERT INTO "rating"
//   ("physical_activity", "diet", "sleep", "mood", "comments", "date")
//   VALUES
//   ($1, '$2', '3', '4', '5', '1-1-22');
//   `;
//   const sqlValue = [
//       req.body.physical_activity,
//       req.body.diet
//   ];
//   pool.query(sqlText, sqlValue)
//   .then((dbResult) => {
//       console.log('insert success', dbResult);
//       res.sendStatus(201);
//   })
//   .catch((dbErr) => {
//       console.log(`Error adding physical activity and diet`, dbErr);
//       res.sendStatus(500);
//   });
// });

// module.exports = router;
