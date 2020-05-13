const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keywordSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Keyword', keywordSchema);