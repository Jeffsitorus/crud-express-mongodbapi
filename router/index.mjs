import express from "express";
const api = express();

import TaskController from "../app/controllers/TaskController.mjs";
import BlogController from "../app/controllers/BlogController.mjs";

api.get("/", (req, res) => {
  res.json({ route: "api" });
});

api.get("/tasks", TaskController.index);
api.post("/tasks", TaskController.store);
api.get("/tasks/:id", TaskController.show);
api.put("/tasks/:id", TaskController.update);
api.delete("/tasks/:id", TaskController.destroy);

api.get("/blogs", BlogController.index);
api.get('/blogs/:id', BlogController.show)
api.post("/blogs", BlogController.store);
api.put("/blogs/:id", BlogController.update);
api.delete("/blogs/:id", BlogController.destroy);

export default api;
