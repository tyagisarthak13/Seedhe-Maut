// v1/index.js
import express from "express";
const router = express.Router();

// Import the user router
import { router as userRouter } from "./user/index.js";
import { router as feeRouter } from "./fee/index.js";

// Mount the user router at the /user path
router.use("/user", userRouter);

router.use("/fee", feeRouter);
export { router };
