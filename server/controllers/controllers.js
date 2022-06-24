const Article = require('../models/models.js');
const SavedArticles = require('../models/latermodels.js');

exports.getNormalNews = (req, res) => {
  console.log('controller input', input);
  return Article.find({})
    .then((results) => res.status(200).send(results))
    .catch(err => console.log('error retrieving all articles', err));
}

exports.addForLater = (req, res) => {
  let input = req.body;
  console.log('controller input', input);
  SavedArticles.create(input)
    .then(() => res.status(201).send({'status': 'ok'}))
    .catch(err => console.log('err adding article to db', err))
}

exports.getSavedNews = (req, res) => {
  SavedArticles.find({})
    .then((results) => res.status(200).send(results))
    .catch(err => console.log('error retrieving saved articles', err));
}