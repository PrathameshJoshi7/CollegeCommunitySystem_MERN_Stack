import React, { useEffect, useState } from "react";
import axios from "axios";
import ANS from "./CSS files/QAanswers.module.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Answer = () => {
  const [answerList, setAnswerList] = useState([]);
  useEffect(() => {
    // Fetch names from the backend API
    axios
      .get("http://localhost:8080/college/answer", { withCredentials: true })
      .then((res) => {
        const answer = res.data;
        //console.log(answer);
        setAnswerList([...answer]);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);
  //console.log(answerList);
  return (
    <div>
      <Header />
      <Navbar />
      <table>
        <thead>
        <tr >
          <th>Qusetion</th>
          <th>Answer</th>
        </tr>
        </thead>
      </table>
      <table>
        <tbody>
          {answerList.map((answer, index) => (
            <tr key={index} className={ANS.Anstable}>
              <td>{answer.query}</td>
              <td><span style={{fontWeight:"bold"}}>Teacher Name:</span>{answer.Teachname}
              <br/>
              {answer.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Answer;
