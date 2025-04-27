import React from "react";
import profilephoto from "../../../Assets/dp.jpg";

function PhotoFrame() {
  return (
    <div className="relative w-80 h-80">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)",
        }}
      ></div>
      <div className="absolute inset-0">
        <img
          src={profilephoto}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default PhotoFrame;
