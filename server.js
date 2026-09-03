import express from "express";
import os from "os";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

app.get("/api/system-info", (req, res) => {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  res.json({
    pcName: os.hostname(),
    userName: os.userInfo().username,
    day,
    date,
    time: now.toLocaleTimeString("en-IN"),
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});