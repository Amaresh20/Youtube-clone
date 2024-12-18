import express from "express";
import { userRoutes } from "./routes/user.routes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
userRoutes(app);
mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;
db.on("/open", () => {
  console.log("database is conneected");
});
db.on("/error", () => {
  console.log("database is no connected");
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
