const Quote = require("../models/Quote");

// Create new quote
exports.createQuote = async (req, res, next) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote);
  } catch (error) {
    next(error);
  }
};

// Get all quotes
exports.getAllQuotes = async (req, res, next) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    next(error);
  }
};

// Get one quote
exports.getQuoteById = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ message: "Quote not found" });
    res.json(quote);
  } catch (error) {
    next(error);
  }
};

// Update quote
exports.updateQuote = async (req, res, next) => {
  try {
    const updated = await Quote.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Delete quote
exports.deleteQuote = async (req, res, next) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: "Quote deleted" });
  } catch (error) {
    next(error);
  }
};
