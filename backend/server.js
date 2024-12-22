import express from "express";
import { userRoutes } from "./routes/user.routes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
userRoutes(app);
mongoose.connect(
  "mongodb+srv://internshala:internshala@cluster0.lota8m5.mongodb.net/"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("database is connected");
});
db.on("error", () => {
  console.log("database is no connected");
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
