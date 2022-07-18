const express = require("express");
const app = express();

const message = require("./services/sayHelloWorld")


app.use(express.json());

app.get("/", (req, res) => {
  

  res.send(message);

});

module.exports = { app };