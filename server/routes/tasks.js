const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  res.json(await Task.find(filter).sort({ deadline: 1 }));
});
router.post("/", async (req, res) => {
  try { res.status(201).json(await Task.create(req.body)); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
router.patch("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!task) return res.status(404).json({ error: "Not found" });
  res.json(task);
});
module.exports = router;
