const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: String},
  url: {type: String, required: true},
  urlToImage: {type: String, required: true},
  publishedAt: {type: Date, required: true},
  content: {type: String, required: true},
  source: {
    id: {type: String},
    name: {type: String}
  }
});

const Article = mongoose.model('Articles', articlesSchema);

module.exports = Article;