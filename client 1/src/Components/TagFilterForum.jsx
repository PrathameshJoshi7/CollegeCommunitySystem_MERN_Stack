import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./CSS files/TagFilter.css";
import QuestionList from "./MainHomeBar/QuestionList";

const TagFilterForum = () => {
  const [queList, setQueList] = useState([]);
  useEffect(() => {
    // Fetch names from the backend API
    axios
      .get("http://localhost:8080/college/getTagQues", {
        withCredentials: true,
      })
      .then((res) => {
        setQueList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main-bar1">
        <div className="questionBar1">
          <div className="main-bar-header">
            <h1>All Questions</h1>
          </div>
          <div>
            <p>{queList.length} questions</p>
            <div className="questTagFilteredList1">
              <QuestionList questionList={queList} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default TagFilterForum;
