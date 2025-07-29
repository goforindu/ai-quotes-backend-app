import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory array of quotes
let quotes = [
  {
    id: 1,
    text: "You have the right to work, but never to the fruit of work. - Krishna",
  },
  { id: 2, text: "Change is the law of the universe. - Krishna" },
  { id: 3, text: "A person is made by their beliefs. - Krishna" },
];

// GET all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});
app.get("/quotes/:id", (req, res) => {
  const { id } = req.params;
  const quote = quotes.find((q) => q.id === parseInt(id));

  if (!quote) return res.status(404).json({ error: "Quote not found" });

  res.json(quote);
});

// POST a new quote
app.post("/quotes", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Quote text required" });

  const newQuote = {
    id: quotes.length ? quotes[quotes.length - 1].id + 1 : 1,
    text,
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// PUT (update) a quote
app.put("/quotes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  const quote = quotes.find((q) => q.id === parseInt(id));
  if (!quote) return res.status(404).json({ error: "Quote not found" });

  quote.text = text || quote.text;
  res.json(quote);
});

// DELETE a quote
app.delete("/quotes/:id", (req, res) => {
  const { id } = req.params;
  const index = quotes.findIndex((q) => q.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Quote not found" });

  const deleted = quotes.splice(index, 1);
  res.json({ message: "Deleted successfully", deleted });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
