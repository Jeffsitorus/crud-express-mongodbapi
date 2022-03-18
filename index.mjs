import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/index.mjs";

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, function () {
  console.log(`listening on http://${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ name: "hello world" });
});
