const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Shree Krishna",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
