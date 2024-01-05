import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ForumSideBar from "./ForumSideBar";
import ForumRightBar from "./ForumRightBar";
import Footer from "./Footer";

function Tags() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="forum-main-container">
        <ForumSideBar />
        <div className="forum-main-container1">
          <ForumRightBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tags;
