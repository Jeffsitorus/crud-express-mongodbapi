import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  mongoose.connect("mongodb://127.0.0.1:27017/express_mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("connect", () => console.log("Database connect"));
} catch (error) {
  throw error;
}

export default mongoose;
