const mongoose = require('mongoose');

const savedForLaterSchema = new mongoose.Schema({
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
})

const SavedArticles = mongoose.model('savedForLater', savedForLaterSchema);

module.exports = SavedArticles;