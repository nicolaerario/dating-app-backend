import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.CONNECTION_URL;

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url);

//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello Dating App"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Linsten on localhost: ${port}`));
