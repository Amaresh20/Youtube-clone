import { useParams } from "react-router-dom";
import { youtubeData } from "../utils/mockData";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
function ViewVideo() {
  const [viewVideo, setViewVideo] = useState([]);
  const [commentText, setCommentText] = useState(""); // State to store comment text
  const { id } = useParams(); // Get videoId from the URL
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState(null);
  useEffect(() => {
    fetchYoutubeData();
    fetchYoutubeComments();
  }, []);

  // Fetch video data
  async function fetchYoutubeData() {
    const result = await fetch(
      "https://youtube-clone-1-nt3e.onrender.com/youtube/data"
    );
    const data = await result.json();
    setViewVideo(data);
  }
  //fetch comment
  async function fetchYoutubeComments() {
    const result = await fetch(
      "https://youtube-clone-1-nt3e.onrender.com/get-comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`, // Pass token from local storage
        },
        body: JSON.stringify({ videoId: id }),
      }
    );
    const data = await result.json();
    setComments(data.data);
  }

  // Find the video from the data
  const video = viewVideo.find((data) => data._id === id);

  if (!video) {
    return <div>Video not found</div>; // Handle case where videoId doesn't exist
  }

  // Handle comment submission
  async function handleAddComment() {
    if (!commentText) return; // Don't allow empty comments

    const commentData = {
      videoId: id,
      description: commentText,
    };

    const response = await fetch(
      "https://youtube-clone-1-nt3e.onrender.com/add-comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`, // Pass token from local storage
        },
        body: JSON.stringify(commentData),
      }
    );

    const data = await response.json();
    if (data) {
      fetchYoutubeComments();
    }
  }
  async function handleDeleteComment(commentId) {
    const response = await fetch(
      `https://youtube-clone-1-nt3e.onrender.com/delete-comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`, // Pass token from local storage
        },
      }
    );
    const data = await response.json();
    if (data) {
      alert("comment is deleted successfully");
      fetchYoutubeComments();
    }
  }
  function handleEditComment(comment) {
    setEditComment(comment);
    setCommentText(comment.description);
  }
  async function handleSaveComment() {
    const response = await fetch(
      `https://youtube-clone-1-nt3e.onrender.com/edit-comment/${editComment._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`, // Pass token from local storage
        },
        body: JSON.stringify({ description: commentText }),
      }
    );
    const data = await response.json();
    if (data) {
      fetchYoutubeComments();
    }
  }
  return (
    <div className="video-container w-full p-4 ">
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
        {/* Video Title */}
        <h1 className="text-xl font-bold text-gray-900">{video.title}</h1>

        {/* Views and Upload Date */}
        <div className="flex items-center space-x-2 text-gray-500 mt-1">
          <span>{video.views.toLocaleString()} views</span>
          <span>•</span>
          <span>{video.uploadDate}</span>
        </div>

        {/* Channel Info */}
        <div className="flex items-center justify-between mt-4">
          {/* Channel Details */}
          <div className="flex items-center space-x-4">
            {/* Channel Name and Subscribers */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {video.uploader}
              </h3>
              <p className="text-xs text-gray-500">1.2M subscribers</p>
            </div>
          </div>

          {/* Subscribe Button */}
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-red-600 transition">
            Subscribe
          </button>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-gray-800 text-sm leading-6">{video.description}</p>
        </div>
      </div>

      {/* Static Buttons */}
      <div className="video-actions mt-4 flex items-center space-x-6">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition duration-200">
          <FaThumbsUp className="text-lg" />
          <span className="font-medium">Like</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition duration-200">
          <FaThumbsDown className="text-lg" />
          <span className="font-medium">Dislike</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition duration-200">
          <FaShare className="text-lg" />
          <span className="font-medium">Share</span>
        </button>
      </div>

      {/* Comment Input */}
      <div className="comment-input mt-6 flex items-center space-x-2">
        <input
          className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        {editComment ? (
          <div>
            <button
              onClick={handleSaveComment}
              className="bg-blue-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditComment(null);
              }}
              className="bg-blue-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-300 ease-in-out"
            >
              Discard
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-300 ease-in-out"
          >
            Add
          </button>
        )}
      </div>

      {/* Comments */}
      <div className="comments mt-6">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <ul className="comment-list space-y-4">
          {comments.map((comment) => {
            console.log("comment", comment);
            return (
              <li
                key={comment._id}
                className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="font-semibold text-gray-800">
                  {comment.fullName}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {comment.description}
                </p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditComment(comment)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ViewVideo;
