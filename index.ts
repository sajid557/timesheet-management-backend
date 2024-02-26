require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/url", (req, res) => {
  res.send("this is my new url");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
