import React from "react";

function Video({ video, onUpvote, onDownvote }) {
  return (
    <div className="video">
      <iframe
        src={video.url}
        title={video.title}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.title}</h2>
      <p>Upvotes: {video.upvotes}</p>
      <p>Downvotes: {video.downvotes}</p>
      <button onClick={onUpvote}>👍</button>
      <button onClick={onDownvote}>👎</button>
    </div>
  );
}

export default Video;
