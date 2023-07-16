import React from "react";
import "./css/MainLayout.css";
import TopNav from "./TopNav";
const MainLayout = () => {
  return (
    <div className="mainLayout_container">
      <header>
        <TopNav />
      </header>
    </div>
  );
};

export default MainLayout;
