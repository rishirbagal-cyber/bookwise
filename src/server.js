import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bookwise API is running." });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");

    app.listen(process.env.PORT || 10000, () => {
      console.log(`Server running on port ${process.env.PORT || 10000}`);
    });
  })
  .catch((err) => console.error(err));