import Task from "../models/Task.mjs";

export default class TaskRepository {
  async getTask() {
    try {
      const tasks = await Task.find();

      return tasks;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async insertTask(body) {
    try {
      const task = new Task(body);
      const result = await task.save();

      return result;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async getTaskById(taskId) {
    try {
      const task = await Task.findById(taskId);

      return task;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async updateTask(taskId, body) {
    try {
      const result = await Task.updateOne({ _id: taskId }, { $set: body });
      
      return result;
    } catch (error) {
      throw error;
      return null;
    }
  }

  async deleteTaskById(taskId) {
    try {
      const result = Task.deleteOne({ _id: taskId });

      return result;
    } catch (error) {
      throw error;
      return null;
    }
  }
}
