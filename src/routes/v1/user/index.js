// user/index.js
import express from "express";
import { signup, login } from "../../../services/user.js";

const router = express.Router();

// Define a sample route for the user endpoint
router.get("/", (req, res) => {
  res.send("User home route");
});

router.post("/signup", async (req, res) => {
  console.log("fbdgferggrgtrrtrrgtrgtgtrgrf", req.body);
  await signup(req, res);
});

router.post("/login", async (req, res) => {
  await login(req, res);
});

export { router };
