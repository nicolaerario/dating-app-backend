import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// App config
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.CONNECTION_URL;

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello Dating App"));

//Listener
app.listen(port, () => console.log(`Linsten on localhost: ${port}`));
