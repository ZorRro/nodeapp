require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const cors = require("cors");
const AuthRouter = require("./routes/temp");

function start() {
  const PORT = config.app.PORT;

  const app = express();

  app.use(cors());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/auth", AuthRouter);
  app.use("/", (req, res, next) => {
    console.log("Request received at /");
    return res.json({ message: "hello node" });
  });

  app.get("*", (req, res, next) => {
    res.sendFile("index.html", { root: path.join(__dirname, "public") });
  });

  app.listen(PORT, (req, res) => {
    console.log("Server is up and listening at " + PORT);
  });
}

start();
