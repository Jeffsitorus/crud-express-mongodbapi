import TaskRepository from "../repositories/TaskRepository.mjs";

const TaskController = {
  async index(req, res) {
    try {
      const taskRepository = new TaskRepository();
      const result = await taskRepository.getTask();

      return res.status(200).json({
        status: true,
        data: result,
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async store(req, res) {
    try {
      const taskRepository = new TaskRepository();
      const body = req.body;
      const result = await taskRepository.insertTask(body);

      return res.status(200).json({
        status: true,
        message: result,
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async show(req, res) {
    try {
      const taskId = req.params.id;
      const taskRepository = new TaskRepository();
      const result = await taskRepository.getTaskById(taskId);
      if (!result) {
        return res.status(404).json({
          status: false,
          message: "Task not found",
        });
      }

      return res.status(200).json({
        status: true,
        data: result,
      });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const taskId = req.params.id;
      const taskRepository = new TaskRepository();
      const task = await taskRepository.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({
          status: false,
          message: "Task not found",
        });
      }
      const result = await taskRepository.updateTask(taskId, req.body);

      if (result) {
        return res.status(200).json({
          status: true,
          message: "Task has updated",
        });
      }
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async destroy(req, res) {
    try {
      const taskId = req.params.id;
      const taskRepository = new TaskRepository();
      const task = await taskRepository.getTaskById(taskId);
      if (!task)
        return res.status(404).json({
          status: false,
          message: "Task not found",
        });

      const result = await taskRepository.deleteTaskById(taskId);

      if (result)
        return res.status(200).json({
          status: true,
          message: "Task has deleted",
        });
    } catch (error) {
      return res.send({
        status: false,
        message: error.message,
      });
    }
  },
};

export default TaskController;
