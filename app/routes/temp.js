const config = require("config");
const Router = require("express").Router();

Router.get("/request", async (req, res, next) => {
  console.log("request received.");
  console.log(`Port = ${config.app.PORT}`);
  return res.sendStatus(200);
});

module.exports = Router;
