import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});
const userModel = mongoose.model("user", userSchema);
export default userModel;
