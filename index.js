const express = require("express");
const requestIp = require("request-ip");
const path = require("path");
const app = express();
const port = 8080;

const storage = [];
const visit = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public", "foodhut")));

app.get("/", (req, res) => {
  visit.push(requestIp.getClientIp(req));
  res.sendFile(path.join(__dirname, "public", "foodhut", "index.html"));
  // res.send("Hello CX Devs you found me!");
});

app.post("/api", (req, res) => {
  const { coords, timestamp, timezone } = req.body;
  console.log(coords);
  console.log(timestamp);
  console.log(timezone);
  res.status.send("Searching");
});

app.post("/result", (req, res) => {
  storage.push({ user: req.ip?.user, pass: req.body?.pass });
  console.log(storage);
  res.send("What is this endpoint doing? Does it save something?");
});

app.get("/result-server", (req, res) => {
  res.send(
    `<h1>Results: </h1> <p>users: </p> ${storage.map((item) =>
      JSON.stringify(item)
    )}  <p>IPs: </p>${visit} `
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
