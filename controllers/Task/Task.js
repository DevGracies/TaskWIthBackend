import httpStatus from "http-status";
import TaskModel from "../../models/Task.js";
import UserModel from "../../models/User.js";

export const createTask = async (req, res) => {
  //collect required field from the body
  const { title, desc } = req.body;
  // get the current user id
  const userId = req.user.id;
  // create the task record

  try {
    const titleValidation = await TaskModel.findOne({ title: title });
    if (titleValidation) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        payload: "title exist",
      });
      return;
    }
    const task = await TaskModel.create({
      title,
      desc,
      userId,
    });
    // pass the create task as reference to the user model
    const user = await UserModel.findOne({
      _id: userId,
    });
    user.tasks.push(task._id);
    await user.save();
    res.status(httpStatus.CREATED).json({
      status: "success",
      payload: task,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getTask = async (res, req) => {
  const { id } = req.params;
  try {
    const taskExist = await TaskModel.findById({ _id: id });
    if (!taskExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "task not found",
      });
      return;
    }
    res.status(httpStatus.OK).json({
      status: "sucess",
      payload: taskExist,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};

export const deleteTask = async (res, req) => {
  const { id } = req.param;
  try {
    const task = await TaskModel.findById({ _id: id });
    if (!task) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "task not found",
      });
      return;
    }
    await task.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "user removed",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: error.message,
    });
  }
};
