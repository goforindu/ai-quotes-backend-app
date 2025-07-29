// middleware/auth.js
export const restrictAccess = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  // Store your secret key securely (use env file)
  if (apiKey === process.env.API_SECRET_KEY) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
};
