import youtubeDataModel from "../model/youtubeData.model.js";

export function fetchAllYoutubeData(req, res) {
  const {
    title,
    thumbnailUrl,
    description,
    uploader,
    views,
    likes,
    dislikes,
    uploadDate,
    genre,
    videoUrl,
  } = req.body;

  const newYoutubeData = new youtubeDataModel({
    title,
    thumbnailUrl,
    description,
    uploader,
    views,
    likes,
    dislikes,
    uploadDate,
    genre,
    videoUrl,
  });
  newYoutubeData
    .save()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "youtube data is not found" });
      }
      res.send(data);
    })
    .catch((error) => {
      return res.status(505).json({ message: error.message });
    });
}
