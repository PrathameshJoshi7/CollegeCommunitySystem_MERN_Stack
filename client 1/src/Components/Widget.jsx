import React from "react";
import "./CSS files/ForumRightBar.css";
import pen from "./Images/icons8-pen.gif";
import comment from './Images/icons8-forum-60.png'
import like from './Images/like.png'

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Forum Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>vnanvjbfkdsjfbnjbskjnbkjsngskjnkjfbnkjsdfkjb</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>vjlkbdkvndfjbvkjfdbksdflbjnkdjfbnkjdfbnkjfbnkjdfffblsjfdbsjkfbksfj</p>
        </div>
      </div>
      <h4>Top Answers</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>vnanvjbfkdsjfbnjbskjnbkjsngskjnkjfbnkjsdfkjb</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>vjlkbdkvndfjbvkjfdbksdflbjnkdjfbnkjdfbnkjfbnkjdfffblsjfdbsjkfbksfj</p>
        </div>
      </div>
      <h4>Top Sites</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={like} alt="like" width="18" />
          <p>vnanvjbfkdsjfbnjbskjnbkjsngskjnkjfbnkjsdfkjb</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={like} alt="like" width="18" />
          <p>vjlkbdkvndfjbvkjfdbksdflbjnkdjfbnkjdfbnkjfbnkjdfffblsjfdbsjkfbksfj</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
