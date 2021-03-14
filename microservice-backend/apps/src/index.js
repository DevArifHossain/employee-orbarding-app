const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const apps = {};

app.post("/users/apps", async (req, res) => {
  const id = Math.random().toString(36).substring(2);
  const { access, userId } = req.body;
  const app = { id, access };
  apps[userId] = app;
  await axios.post("http://localhost:5005/events", {
    type: "AppAcessCreated",
    data: { userId, access },
  });
  res.json(apps[userId]);
});

app.patch("/users/apps", async (req, res) => {
  try {
    const { access, userId } = req.body;
    console.log(req.body);
    console.log(apps[userId]);
    apps[userId].access = access;

    await axios.post("http://localhost:5005/events", {
      type: "AppAcessUpdated",
      data: { userId, access },
    });
    res.json(apps[userId]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.get("/users/apps", (req, res) => {
  const { userId } = req.query;

  res.json(apps[userId]);
});

app.post("/events", (req, res) => {
  console.log("Event type", req.body.type);
  res.json({ msg: "Event bus called me" });
});

app.listen(PORT, () => {
  console.log(`Users app is running on port ${PORT}`);
});
