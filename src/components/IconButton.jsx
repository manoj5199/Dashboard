import React from "react";

export const IconButton = ({
  title = "button",
  width = "40px",
  height = "40px",
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className="icon_button"
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};
