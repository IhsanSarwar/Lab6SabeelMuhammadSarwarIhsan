const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  publishedDate: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: Number,
  },
});

module.exports = mongoose.model("Book", BookSchema);