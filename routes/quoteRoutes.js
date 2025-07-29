const express = require("express");
const router = express.Router();
const {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
} = require("../controllers/quoteController");

router.route("/").get(getAllQuotes).post(createQuote);

router.route("/:id").get(getQuoteById).put(updateQuote).delete(deleteQuote);

module.exports = router;
