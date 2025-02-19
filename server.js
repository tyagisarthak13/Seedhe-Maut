import express from "express";
import "dotenv/config";
import { connectDB } from "./src/config/db.js";
import { router as mainRouter } from "./src/routes/index.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(mainRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port  ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection fail!!!");
  });
