import { login, signup } from "../controller/user.controller.js";
import { fetchAllYoutubeData } from "../controller/youtubeData.controller.js";

export function userRoutes(app) {
  app.post("/signup", signup);
  app.post("/login", login);
  app.post("/youtube/data", fetchAllYoutubeData);
}
