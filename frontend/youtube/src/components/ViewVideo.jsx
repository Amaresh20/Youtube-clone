import { useParams } from "react-router-dom";
import { youtubeData } from "../utils/mockData";

function ViewVideo() {
  const { id } = useParams(); // Get videoId from the URL
  const video = youtubeData.find((data) => data.videoId === id); // Find the video data
  console.log("id", id);
  console.log("video", video);
  if (!video) {
    return <div>Video not found</div>; // Handle case where videoId doesn't exist
  }

  return (
    <div className="video-container w-full p-4">
      {/* Video */}
      <iframe
        height="500"
        width="100%"
        src={video.videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* Video Info */}
      <div className="video-info mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-gray-600">{video.uploader}</p>
        <p className="text-gray-600">
          {video.views} views • {video.uploadDate}
        </p>
        <p className="text-gray-800 mt-2">{video.description}</p>
      </div>

      {/* Comments */}
      <div className="comments mt-6">
        <h2 className="text-xl font-bold">Comments:</h2>
        <ul>
          {video.comments.map((comment) => (
            <li key={comment.commentId} className="mt-2">
              <p>{comment.text}</p>
              <span className="text-gray-500 text-sm">{comment.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ViewVideo;
