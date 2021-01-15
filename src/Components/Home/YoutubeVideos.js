import React from "react";
import "../../Styles/youtube.css";
const YoutubeVideo = ({ video }) => {
  const videoID = video.contentDetails.videoId;
  return (
    <div className="VideoContainerAll ">
      <div className="VideoContainer ">
        <iframe
          className="VideoFrame"
          src={"https://www.youtube.com/embed/" + videoID}
          style={{ borderRadius: "1.5rem" }}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};
export default YoutubeVideo;
