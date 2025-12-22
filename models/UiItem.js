const mongoose = require('mongoose');

const uiItemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  htmlUrl: String
});

module.exports = mongoose.model('UiItem', uiItemSchema);
