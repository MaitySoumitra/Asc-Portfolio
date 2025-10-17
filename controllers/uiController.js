const UiItem = require('../models/UiItem');

// Get all items
const getAllUiItems = async (req, res) => {
  try {
    const items = await UiItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add item
const addUiItem = async (req, res) => {
  try {
    const newItem = new UiItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
};

module.exports = {
  getAllUiItems,
  addUiItem,
};
