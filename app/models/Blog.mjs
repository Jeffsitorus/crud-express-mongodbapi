import mongoose from "../config/mongodb.mjs";

const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
    published_at: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("Blog", Blog);
