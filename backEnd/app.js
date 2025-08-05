require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ENV:
const PORT = process.env.PORT;
const MONGO_DB_SERVER = process.env.CONNECTION_STRING_ATLAS;

// ROUTES:
const bizRoutes = require("./routes/biz");

// Global middleware: CORS, JSON parsing, and user routes
app.use(require("cors")());
app.use(express.json());
app.use("/api/biz", bizRoutes);

connected();

async function connected() {
  try {
    await mongoose.connect(MONGO_DB_SERVER);
    console.log("MongoDB connected succesfully.");

    app.listen(PORT, () => {
      console.log("SERVER RUNNING ON PORT:", PORT);
    });
  } catch (err) {
    console.log("Faild to connected:", err);
  }
}
