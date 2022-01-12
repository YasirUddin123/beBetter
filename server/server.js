const axios = require('axios');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const resultsRouter = require('./routes/resultsRouter.js')
// const dietRouter = require('./routes/diet.router')

app.get('/quotes', (req, res) => {
  const myApiKey = process.env.API_KEY;
  axios({
    method: 'GET',
    url: `https://zenquotes.io/api/random/=${myApiKey}`
  })
  .then((apiRes) => {
    console.log(apiRes.data[0].q)
    res.send(apiRes.data[0].q);
  })
  .catch((apiErr) => {
    console.error(apiErr);
  })
})

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Express Routes */
app.use('/api/user', userRouter);
app.use('/api/results', resultsRouter);
// app.use('/api/diet', dietRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
