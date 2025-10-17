const mongoose = require('mongoose');

const uiItemSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model('UiItem', uiItemSchema);
