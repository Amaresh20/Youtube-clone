import {
  addComment,
  deleteComment,
  getComment,
  updateComment,
} from "../controller/comment.controller.js";
import { login, signup } from "../controller/user.controller.js";
import {
  fetchAllYoutubeData,
  getAllYoutubeData,
} from "../controller/youtubeData.controller.js";
import { verifyToken } from "../middlewares/user.middleware.js";

export function userRoutes(app) {
  app.post("/signup", signup);
  app.post("/login", login);
  app.post("/youtube/data", fetchAllYoutubeData);
  app.get("/youtube/data", getAllYoutubeData);
  app.post("/add-comment", verifyToken, addComment);
  app.post("/get-comment", verifyToken, getComment);
  app.delete("/delete-comment/:id", verifyToken, deleteComment);
  app.put("/edit-comment/:id", verifyToken, updateComment);
}
