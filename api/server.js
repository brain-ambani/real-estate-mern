import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT} and successfully connected to MongoDB`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
