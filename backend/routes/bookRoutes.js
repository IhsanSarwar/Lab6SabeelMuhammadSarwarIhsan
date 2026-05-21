const express = require("express");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.route("/")
  .get(getBooks)
  .post(createBook);

router.route("/:id")
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;