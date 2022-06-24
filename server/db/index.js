const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/effabout',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;

db.on('open', () => console.log('mongoose connected to db successfully'));
db.on('error', () => console.log('mongoose failed to connect to db'));

module.exports = db;