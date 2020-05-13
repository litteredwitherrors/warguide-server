const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  name: String,
  type: String,
  keywords: Array
})

module.exports = mongoose.model('Model', modelSchema);