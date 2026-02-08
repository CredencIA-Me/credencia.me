import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const mongoUri = process.env.MONGODB_URI || "";

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.error("MongoDB connection error", error);
    });
} else {
  console.warn("MONGODB_URI is not set; skipping MongoDB connection");
}

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
