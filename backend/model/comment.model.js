import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  videoId: String,
  description: String,
  fullName: String,
});
const commentModel = mongoose.model("comment", commentSchema);
export default commentModel;
