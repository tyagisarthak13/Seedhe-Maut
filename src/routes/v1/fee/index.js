// user/index.js
import express from "express";
const router = express.Router();

// Define a sample route for the user endpoint
router.get("/", (req, res) => {
  res.send("FEE home route");
});

export { router };
