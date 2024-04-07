import React, { useState } from "react";
import Video from "./Video";
import CommentList from "./CommentList";
import videoData from "./data/video";

function App() {
  const [video, setVideo] = useState(videoData);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      upvotes: prevVideo.upvotes + 1,
    }));
  };

  const handleDownvote = () => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      downvotes: prevVideo.downvotes + 1,
    }));
  };

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  return (
    <div className="app">
      <Video
        video={video}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentList comments={video.comments} />}
    </div>
  );
}

export default App;
