import React from "react";
import VideoHeader from "../../assets/videos/header-video.mp4";

const HeaderVideo = () => {
  return (
    <video
      src={VideoHeader}
      autoPlay
      muted
      loop
      className="absolute -z-10 h-full w-full object-fill"
    ></video>
  );
};

export default HeaderVideo;
