// backend/index.js
const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(3000);
