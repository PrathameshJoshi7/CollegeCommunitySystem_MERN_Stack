import React from "react";

import { BrowserRouter, Routes ,Route } from "react-router-dom";

import RegisterPage from "./Components/RegisterPage";
import Login from './Components/Login';
import ProfileInfo from './Components/ProfileInfo';
import FinalQuesAns from "./Components/FinalQuesAns";
import QueAns from './Components/QueAns';
import HomePage from './Components/HomePage';
import TeacherQA from './Components/TeacherQA';
import Forum from "./Components/Forum";
import Questions from "./Components/MainHomeBar/Questions";
import AskQuestion from "./Components/AskQuestion";
import Tags from "./Components/Tags"
import Users from "./Components/Users"
import DisplayQuestion from "./Components/DisplayQuestion"
import Answer from "./Components/Answer"
import TagFilterForum from "./Components/TagFilterForum";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<RegisterPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ProfileInfo" element={<ProfileInfo />} />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/FinalQuesAns" element={<FinalQuesAns />} />
          <Route exact path="/QueAns" element={<QueAns />} />
          <Route exact path="/TeacherQA" element={<TeacherQA />} />
          <Route exact path="/Forum" element={<Forum />} />
          <Route exact path="/Questions" element={<Questions/>} />
          <Route exact path="/Questions/:id" element={<DisplayQuestion />} />
          <Route exact path="/Tags" element={<Tags />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/AskQuestion" element={<AskQuestion />} />
          <Route exact path="/Answer" element={<Answer />} />          
          <Route exact path="/TagFilterForum/:tag" element={<TagFilterForum />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
