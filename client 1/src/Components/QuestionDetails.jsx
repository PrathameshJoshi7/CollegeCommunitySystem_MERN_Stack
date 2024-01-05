import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CSS files/Question.css";
import send from "./Images/icons8-sent-50.png";
//import DisplayAnswer from './DisplayAnswer';
//import Avatar from './Avatar';
import moment from "moment";
import like from "./Images/like (1).png";
import dislike from "./Images/dislike.png"
const QuestionDetails = ({ questionList }) => {
  //console.log(questionList);
  const [comment, setComment] = useState("");
  const [upVote, setUpVote] = useState(1);
  const [downVote, setDownVote] = useState(1);
  const [showComment, setShowComment] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/college/getComment", {
          withCredentials: true,
        })
        .then((res) => {
          const comments = res.data;
          setShowComment(comments);
        })
        .catch((error) => {
          console.error("Error fetching names:", error);
        });
    } catch (error) {
      console.log("error danger");
    }
  }, []);

  const handlePostcomt = (e) => {
    try {
      axios
        .post(
          "http://localhost:8080/college/addComment",
          { answerBody: comment },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("comment successfully");
        })
        .catch((error) => {
          console.error("Error fetching names:", error);
        });
    } catch (error) {
      console.log("error danger");
    }
  };

  // const handleUpVote = (e) => {
  //   try {
  //     axios
  //       .post(
  //         "http://localhost:8080/college/addVotes",
  //         { upVotes: upVote, upVotes: questionList.upVotes },
  //         { withCredentials: true }
  //       )
  //       .then((res) => {
  //         setUpVote(questionList.upVotes);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching names:", error);
  //       });
  //   } catch (error) {
  //     console.log("error danger");
  //   }
  //   setUpVote(upVote=>(upVote + 1));
  //   console.log("up vote", upVote);
  // };

  // const handleDownVote = () => {
  //   try {
  //     axios
  //       .post(
  //         "http://localhost:8080/college/addVotes",
  //         { downVotes: questionList.downVotes, downVotes: downVote },
  //         { withCredentials: true }
  //       )
  //       .then((res) => {
  //         setDownVote(questionList.downVotes);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching names:", error);
  //       });
  //   } catch (error) {
  //     console.log("error danger");
  //   }
  //   setDownVote(downVote=>(downVote + 1));
  //   console.log("down vote", downVote);
  // };

  return (
    <section className="question-details-container">
      <h1>{questionList.questionTitle}</h1>
      <div className="question-details-container-2">
        {/* <div className="question-votes">
          <button
            style={{ borderRadius: "60%" }}
            onClick={() => handleUpVote()}
          >
            <img src={upvote} alt="" width="18" className="votes-icon" />
          </button>
          <p>{questionList.upVotes - questionList.downVotes}</p>
          <button
            style={{ borderRadius: "60%" }}
            onClick={() => handleDownVote()}
          >
            <img src={downvote} alt="" width="18" className="votes-icon" />
          </button>
        </div> */}
        <div style={{ width: "100%" }}>
          <p className="question-body">{questionList.questionBody}</p>
          <div className="question-actions-user">
            <div className="Display-Info">
              <p><input type="image" src={like} alt="like" style={{height:"20px"}} /> {questionList.upVotes}</p>
              <p><input type="image" src={dislike} alt="like" style={{height:"20px"}} /> {questionList.downVotes}</p>
              <p>asked {moment(questionList.askedOn).fromNow()}</p>

              <div>{questionList.userPosted}</div>
            </div>
            <br />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePostcomt();
              }}
            >
              <div className="display-ans">
                {showComment.map((c, index) => (
                  <p key={index}>
                    <div className="usernm"><div className="timeofcmt">{c.userName}</div>{moment(c.answeredOn).fromNow()}</div>
                    <br />
                    <div className="AnsBody">{c.answerBody}</div>
                  </p>
                ))}
              </div>
              <textarea
                name=""
                id=""
                cols="100"
                rows="6"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit" className="post-ans-btn">
                <img src={send} alt={send} style={{display: "grid",alignItems: "center"}}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionDetails;
