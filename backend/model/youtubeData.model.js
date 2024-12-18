import mongoose, { Model } from "mongoose";
const youtubeDataSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnailUrl: String,
  description: String,
  uploader: String,
  views: String,
  likes: String,
  dislikes: String,
  uploadDate: String,
  genre: String,
  videoUrl: String,
});
const youtubeDataModel = mongoose.model("youtubedata", youtubeDataSchema);
export default youtubeDataModel;
