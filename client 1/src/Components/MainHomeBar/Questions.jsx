import React from "react";
//import axios from 'axios';
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import moment from "moment";
import "../CSS files/Forum.css";

const Questions = ({ question }) => {
  const [cookies, setCookies, removeCookie] = useCookies(["getQueId"]);
  // useEffect(()=>{
  //   return () =>{
  //     removeCookie("getQueId",{path:"/"})
  //   }
  // },[])
  const setQueId = (qid) => {
    setCookies("getQueId", qid, { path: "/" });
  };
  return (
    <div className="display-question">
      <div className="display-votes-ans">
        <p>{question.upVotes - question.downVotes}</p>
        <p>Votes</p>
      </div>
      <div className="display-question-details">
        {/* ${question._id} */}
        <Link
          to={`/Questions/${question._id}`}
          onClick={() => setQueId(question._id)}
          className="question-title-link"
        >
          {question.questionTitle}
        </Link>
        {/* <a href="http://localhost:3000/Questions">
        {question.questionTitle}
        
        </a> */}
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <div className="display-time">
            {moment(question.askedOn).fromNow()} {question.userPosted}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
