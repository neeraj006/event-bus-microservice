const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;
  events.push(event);
  console.log(1);
  await axios.post("http://localhost:4000/events", event);
  console.log(2);

  await axios.post("http://localhost:4001/events", event);
  console.log(3);

  await axios.post("http://localhost:4002/events", event);
  console.log(4);

  await axios.post("http://localhost:4003/events", event);
  console.log(5);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  console.log(events);
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
