require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./db');
const app = express();
const controllers = require('./controllers/controllers');
const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: ['http://localhost:3000']}))
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

//SOURCES
app.get('/sources', (req, res) => {
  axios.get('http://newsapi.org/v2/top-headlines/sources?country=us', {
    headers: {
      'Authorization': process.env.TOKEN
    }
  })
    .then((results) => res.status(200).send(results.data))
    .catch((err) => {
      console.log('error getting top sources from API', err);
      res.status(500).send(err);
    });
})

const centristOutlets=['the-wall-street-journal', 'bbc-news', 'reuters', 'associated-press', 'axios', 'usa-today', 'the-hill'];

const liberalOutlets = ['the-huffington-post', 'the-lad-bible', 'abc-news', 'cnn', 'msnbc', 'nbc-news', 'politico', 'time', 'the-washington-post', 'buzzfeed', 'newsweek', 'cbs-news'];

const conservativeOutlets = ['national-review', 'the-american-conservative', 'fox-news', 'the-washington-times'];

//CENTRIST
app.get('/centrists', (req, res) => {
  axios.get(`http://newsapi.org/v2/top-headlines?sources=${centristOutlets.join()}`, {
    headers: {
      'Authorization': process.env.TOKEN
    }
  })
    .then((results) => res.status(200).send(results.data))
    .catch((err) => {
      console.log('error getting top sources from API', err);
      res.status(500).send(err);
    });
})

//LEFTIES
app.get('/lefties', (req, res) => {
  axios.get(`http://newsapi.org/v2/top-headlines?sources=${liberalOutlets.join()}`, {
    headers: {
      'Authorization': process.env.TOKEN
    }
  })
    .then((results) => res.status(200).send(results.data))
    .catch((err) => {
      console.log('error getting top sources from API', err);
      res.status(500).send(err);
    });
})

//RIGHTIES
app.get('/righties', (req, res) => {
  axios.get(`http://newsapi.org/v2/top-headlines?sources=${conservativeOutlets.join()}`, {
    headers: {
      'Authorization': process.env.TOKEN
    }
  })
    .then((results) => res.status(200).send(results.data))
    .catch((err) => {
      console.log('error getting top sources from API', err);
      res.status(500).send(err);
    });
})

app.get('/normienews', controllers.getNormalNews);

app.get('/later', controllers.getSavedNews);
app.post('/later', controllers.addForLater);
app.delete('/delete', controllers.removeLater);



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});