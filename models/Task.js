import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },

    userId: { type: mongoose.Schema.ObjectId },
  },
  { timestamp: true }
);

const TaskModel = mongoose.model("Task", taskSchema);
export default TaskModel;
