const mongoose = require("mongoose");
module.exports = mongoose.model("Task", new mongoose.Schema({
  title: { type: String, required: true },
  assignee: { type: String, required: true },
  status: { type: String, enum: ["pending","in_progress","blocked","done"], default: "pending" },
  deadline: { type: Date },
  notes: { type: String, default: "" },
  progress: { type: Number, min: 0, max: 100, default: 0 },
}, { timestamps: true }));
