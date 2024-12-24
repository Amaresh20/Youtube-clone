import commentModel from "../model/comment.model.js";
import youtubeDataModel from "../model/youtubeData.model.js";

//add a comment
export function addComment(req, res) {
  const { videoId, description } = req.body;
  const newComment = new commentModel({
    videoId,
    description,
    fullName: req.user.fullName,
  });

  newComment
    .save()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.status(200).json({ message: "comment added succesfully", data });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
}
//to show the comments
export function getComment(req, res) {
  const { videoId } = req.body;

  commentModel
    .find({ videoId })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res
        .status(200)
        .json({ message: "get specific comment succesfully", data });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
}
//delete the comment
export function deleteComment(req, res) {
  const commentId = req.params.id;
  commentModel
    .findByIdAndDelete(commentId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.status(200).json({ message: "comment delete successfully" }, data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
//edit the comment
export function updateComment(req, res) {
  const commentId = req.params.id;
  commentModel
    .findByIdAndUpdate(commentId, req.body, { new: true })
    .then((data) => {
      console.log("data", data);
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.status(200).json({ message: "comment updated succesfully", data });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
