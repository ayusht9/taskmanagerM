const mongoose = require("mongoose");
const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};


exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const task = await Task.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { $set: req.body },
    { new: true, runValidators: true }
  );

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const task = await Task.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};
