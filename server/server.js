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

// Get route to get Zen Quotes api
// the /random part of the url means that Zen Quotes will send you only one quote by random
// Inside of the data, there is a data object that has a quote, author, and a pre-formatted HTML quote
// I used .q and .a on the Survey.jsx file because I wanted the user to know the quote and author each time they scored low
app.get('/quotes', (req, res) => {
  const myApiKey = process.env.API_KEY;
  axios({
    method: 'GET',
    url: `https://zenquotes.io/api/random/=${myApiKey}`
  })
  .then((apiRes) => {
    console.log(apiRes.data[0].h)
    res.send(apiRes.data[0]);
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
