import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ForumMain from "./MainHomeBar/ForumMain";
import ForumRightBar from "./ForumRightBar";
import Footer from "./Footer";

import './CSS files/Forum.css'


const Forum = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="forum-main-container">
        <ForumMain />
        <ForumRightBar />
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
