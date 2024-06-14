const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
const PORT = process.env.PORT || 5003;
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/team_tasks")
  .then(() => app.listen(PORT, () => console.log(`API on ${PORT}`)))
  .catch((e) => { console.error(e.message); process.exit(1); });
