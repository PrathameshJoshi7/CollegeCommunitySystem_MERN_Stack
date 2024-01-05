import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import qa from './CSS files/QueAns.module.css'
import Header from './Header';
import Navbar from './Navbar'
import Footer from './Footer';


const QueAns = () => {
  const navigate = useNavigate();
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [query, setQuery] = useState('');
  //const [attachment, setAttachment] = useState(null);
  const [queryHistory, setQueryHistory] = useState([]);
  
  useEffect(() => {
    // Fetch names from the backend API
    axios.get('http://localhost:8080/college/queans')
      .then(res => {
        const Teachname = res.data;
        setNames([...Teachname]);         
      })
      .catch(error => {
        console.error('Error fetching names:', error);
      });
  }, []);

  // useEffect(() => {
  //   // Fetch query history from the backend API
  //   axios.get('/api/queryHistory')
  //     .then(response => {
  //       setQueryHistory(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching query history:', error);
  //     });
  // }, []);
  //console.log("names:",names);
  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // const handleAttachmentChange = (event) => {
  //   setAttachment(event.target.files[0]);
  // };

  const handleSendClick = () => {
    axios.post('http://localhost:8080/college/queans',{ 
        Teachname: selectedName,
        query: query,
        //file: attachment,
      },{withCredentials:true})
      .then(res => {
        //console.log('Query sent successfully');
        if(res.data.message === "Question send successfully"){
          alert("Successful..");
          navigate('/HomePage');
        }
        else {
          alert("Something went wrong");
        }
        // Reset form fields
        setSelectedName('');
        setQuery('');
        //setAttachment(null);
        setQueryHistory([...queryHistory, { teacher: selectedName, query }]);
      })
      .catch(error => {
        console.error('Error sending query:', error);
      });

      //console.log("Query",query);
      //console.log("name",selectedName);
  };
  return (
    <div>
      <Header/>
      <Navbar/> 
      <div className={qa.splitScreen}>
        <div className={qa.seventy}>
          <div className={qa.querySection} >
            <label className={qa.teacher}>Teacher : </label>
            <div className={qa.dropDownDiv}>
              <select className={qa.dropDropTeacherList} value={selectedName} onChange={handleNameChange}>
                <option value="">Select a Teacher</option>
                {
                  names.map((name,index)=>
                    (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    )
                  )
                }
              </select>
            </div>
            <br />
            <label className={qa.shorthint}>( You want to send a your Query )</label>
            <br />
            <textarea
              className={qa.query}
              placeholder="Write your query..."
              value={query}
              onChange={handleQueryChange}
            />
            <br />

            {/* <input
              id='attachement'
              enctype="multiplart/form-data"
              type="file"
              className={qa.uploadButton}
              onChange={handleAttachmentChange}
            /> */}
            <br />
            <button onClick={handleSendClick} className={qa.send}>Send</button>
          </div>

        </div>
        <div className={qa.thirty}>
          <label className={qa.history}></label>
          <button type="button" class="btn btn-success" style={{position:'absolute', top:'60%', left:'82%'}} onClick={()=> navigate('/Answer')}>Answers</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default QueAns

