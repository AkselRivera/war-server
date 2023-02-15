const express = require("express");
const app = express();
const port = 3000;

const storage = [];
const visit = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  visit.push(req.ip);
  res.send("Hello CX Devs you found me!");
});

app.post("/result", (req, res) => {
  storage.push(req.body);
  res.send("What is this endpoint doing? Does it save something?");
});

app.get("/result-server", (req, res) => {
  res.send(
    `<h1>Results: </h1> <p>users: </p> ${storage}  <p>IPs: </p>${visit} `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
