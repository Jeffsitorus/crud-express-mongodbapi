import mongoose from "../config/mongodb.mjs";
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("Task", Task);
