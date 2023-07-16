import React from "react";

const ProfileImage = ({
  title = "profile",
  imageURL,
  width = "40px",
  height = "40px",
  onClick,
}) => {
  return (
    <img
      onClick={onClick}
      className="profile_image"
      src={imageURL}
      alt={title}
      style={{ width: width, height: height }}
    />
  );
};

export default ProfileImage;
