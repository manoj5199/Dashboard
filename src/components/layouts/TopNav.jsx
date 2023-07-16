import React from "react";
import "./css/TopNav.css";
import ProfileImage from "../ProfileImage";
import { IconButton } from "../IconButton";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const TopNav = () => {
  return (
    <div className="top_nav_container">
      <div></div>
      <div className="icon_button_container">
        <IconButton>
          <NotificationsNoneRoundedIcon style={{ color: "white" }} />
        </IconButton>
        <ProfileImage
          height={"60px"}
          width={"60px"}
          imageURL={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
          title={"profile"}
        />
      </div>
    </div>
  );
};

export default TopNav;
