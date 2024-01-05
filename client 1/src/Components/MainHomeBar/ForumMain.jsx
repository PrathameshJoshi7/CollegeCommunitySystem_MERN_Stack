import React,{useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import '../CSS files/ForumMain.css'
import QuestionList from './QuestionList'

const ForumMain = () => {
  const location = useLocation()
  const [queList , setQueList] = useState([]); 
    useEffect(() => {
        // Fetch names from the backend API
        axios.get('http://localhost:8080/college/fourums',{withCredentials:true})
          .then(res => {
            const que = res.data;
            //console.log(que);
            setQueList([...que]);
          })
          .catch(error => {
            console.error('Error fetching names:', error);
          });
      }, []);
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === "/Forum" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to='/AskQuestion' className='ask-que-link'>Ask Question</Link>
      </div>
      <div>
        {
          queList === null ?<h1>Loading...</h1> :
          <>
            <p>{queList.length} questions</p>
            <QuestionList questionList={queList} />
          </>
        }
      </div>
    </div>
  )
}

export default ForumMain
