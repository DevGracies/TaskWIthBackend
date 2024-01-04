import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    time: { type: Number },
    desc: { type: String, required: true },
    date: { type: Number },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    userId: { type: mongoose.Schema.ObjectId },
  },
  { timestamp: true }
);

const taskModel = mongoose.model("Task", TaskSchema);

export default taskModel;
