import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionDetails from "./QuestionDetails";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ForumRightBar from "./ForumRightBar";
import './CSS files/Forum.css'

const DisplayQuestion = () => {
  const [queList, setQueList] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/college/getques", { withCredentials: true })
        .then((res) => {
          const que = res.data;
          setQueList(que);
        })
        .catch((error) => {
          console.error("Error fetching names:", error);
        });
    } catch (error) {
      console.log("error danger");
    }
  }, []);
  return (
    <div>
      <div>
      <Header />
      <Navbar />
      <div className="home-container">
        <QuestionDetails questionList={queList} />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisplayQuestion;
