import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  console.log(task);
  await task.save();

  res.json(task);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    console.log(req.params);
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.send(task);
  } catch (error) {
    console.log("Error with getting a task");
    console.log(error);
    return res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.json(task);
  } catch (error) {
    console.log("Error with deleting tasks");
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
  }
});

export default router;
