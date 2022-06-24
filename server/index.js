require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');
const app = express();
const controllers = require('./controllers/controllers');
const axios = require('axios');

app.use(express.json());
app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, '../public')));
const PORT = process.env.port || 8080;

//routes
//GET LATEST NEWS
app.get('/', (req, res) => res.send("I'm Alive"));
app.get('/normiefeed', (req, res) => {
  axios.get('http://newsapi.org/v2/top-headlines?country=us', {
    headers: {
      'Authorization': process.env.TOKEN
    }
  })
    .then((results) => res.status(200).send(results.data))
    .catch((err) => {
      console.log('error getting top articles from API', err);
      res.status(500).send(err);
    });
})

app.get('/normienews', controllers.getNormalNews);

app.get('/later', controllers.getSavedNews);
app.post('/later', controllers.addForLater);



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});