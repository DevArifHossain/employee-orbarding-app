const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5005;

app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
  axios.post("http://localhost:5000/events", req.body);
  axios.post("http://localhost:5001/events", req.body);
  axios.post("http://localhost:5002/events", req.body);

  res.json({ msg: "Event bus triggered!" });
});

app.listen(PORT, () => {
  console.log(`Users app is running on port ${PORT}`);
});
