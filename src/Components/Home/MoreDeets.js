import React from "react";
import Lesson from "../../img/lesson.mp4";

const MoreDeets = () => {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        style={{
          width: "100%",
          marginTop: "-1.5rem",
          marginBottom: "1rem",
        }}
      >
        <source src={Lesson} type="video/mp4" />
      </video>
    </div>
  );
};
export default MoreDeets;
