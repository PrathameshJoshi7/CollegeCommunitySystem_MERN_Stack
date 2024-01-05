import React,{useState} from "react";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { askQuestion } from "../actions/forumQuestions";
//import { useSelector } from "react-redux";
import axios from "axios";
import Ask from './CSS files/AskQuestion.module.css'
//import "./CSS files/AskQuestion.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";



const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const User = useSelector((state) => state.currentUserReducer);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8080/college/askquestion",{
        questionTitle: questionTitle, 
        questionBody: questionBody,
        questionTags: questionTags
      },{withCredentials:true})
      .then((res) => 
        {
          if(res.data.message === "Posted a question successfully"){
            console.log("all good data get saved");
            navigate("/Forum");
          }
          else {
            alert("Something went wrong");
          }
      }, fail => {
        console.error(fail); // Error!
      });
      }
      catch (err) {
        alert(err);
      }
    // if (questionTitle && questionBody && questionTags) {
    //   dispatch(
    //     askQuestion(
    //       {
    //       questionTitle,
    //       questionBody,
    //       questionTags,
    //       userPosted: User.result.name,
    //       },
    //       navigate("/Forum")      
    //       )
    //     );
    //   } else alert("Please enter all the fields");
    // navigate("/Forum")
  }
  return (
    
    <div>
      <Header />
      <Navbar />
      <div className={Ask.mainDiv}>
      <div >
        <h1 id={Ask.qTitle}>Ask a Question</h1>
        <form onSubmit={handleSubmit}>
          <div className={Ask.subDiv} >
            <label htmlFor="ask-ques-title">
              <h4 id={Ask.qsTitle}>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id={Ask.qsTInput}

                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4 id={Ask.qsbTitle}>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id={Ask.qsbInput}
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4 id={Ask.qsTag}>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id={Ask.qsTInput}
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
            <input
            type="submit"
            value="Reivew your question"
            className={Ask.qBtn}
          />
          </div>
          
        </form>
      </div>

      <Footer />
    </div>
    </div>
  );
}

export default AskQuestion;
