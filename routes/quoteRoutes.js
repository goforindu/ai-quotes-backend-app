const express = require("express");
const router = express.Router();
const {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
} = require("../controllers/quoteController");
const { restrictAccess } = require("../middleware/auth.js");
// Public route – anyone can read quotes
router.get("/", getAllQuotes);

// Protected routes – only with API key
router.post("/", restrictAccess, createQuote);
router.get("/:id", restrictAccess, getQuoteById);
router.put("/:id", restrictAccess, updateQuote);
router.delete("/:id", restrictAccess, deleteQuote);

module.exports = router;
