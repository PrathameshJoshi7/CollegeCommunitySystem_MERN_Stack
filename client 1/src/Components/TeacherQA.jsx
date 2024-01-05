import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TQA from './CSS files/TeacherQA.module.css'

import Header from './Header';
import Navbar from './Navbar'
import Footer from './Footer';


function TeacherQA() {
  const [queries, setQueries] = useState([]);
  const [answers, setAnswers] = useState({}); // Store answers in state
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch queries from your API
    // Replace 'your-api-endpoint' with your actual API endpoint
    axios.get('http://localhost:8080/college/queansTeach',{withCredentials:true})
      .then((res) =>{
        const ques = res.data;
        // console.log(ques); 
        setQueries([...ques])
      })
      .catch((error) => console.error('Error fetching queries:', error));
  }, []);

  const handleAnswerChange = (queryId, answer) => {
    setAnswers({
      ...answers,
      [queryId]: answer,
    });
    
  };

  const handleAnswerSubmit = (queryId) => {
    // Send the answer to your backend for storage
    // Replace 'your-api-answer-endpoint' with your actual API endpoint
    const answer = answers[queryId];
    // console.log(answer);
    // console.log(queryId);
    axios.post('http://localhost:8080/college/queansTeach',{ 
      queryId, 
      answer 
    },{withCredentials:true})
      .then((res) => {
        console.log('Answer submitted:');
        if(res.data.message === "Answer send successfully"){   
          alert("Successful..");
          navigate('/TeacherQA');
        }
        else {
          console.log("error");
        }
        // You can add more error handling and feedback to the user
      })
      .catch((error) => console.error('Error submitting answer:', error));

      //console.log(queryId)
  };

  return (
    <div>
      <Header/>
      <Navbar/> 
      <h1 align="center">Student Query</h1>

      <div className={TQA.tqaDiv}>
        {queries.map((qry) => (
          qry.answer === '' ?
            <div key={qry.id} className={TQA.query}>
              <label id={TQA.names}>Name: {qry.stud_nm}</label>
              <p id={TQA.qu}>Question: {qry.query}</p>
              {/* <button onClick={() => handleAnswerChange(query.id, '')}>Answer</button> */}
              <textarea
                id={TQA.textArea}
                rows={4}
                cols={50}
                value={answers[qry._id] || ''}
                onChange={(e) => handleAnswerChange(qry._id, e.target.value)}
              ></textarea>
              <br />
              <button onClick={() => handleAnswerSubmit(qry._id)} id={TQA.sbtn}>Submit Answer</button>
            </div>
            : <div></div>
        ))}
      </div>
 
     <Footer/>
    </div>
  );
}

export default TeacherQA;

