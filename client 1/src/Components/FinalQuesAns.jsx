import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import QueAnsCss from './CSS files/QuesAns.module.css';
import QueAnsCss from './CSS files/QueAns.module.css'
// import QueAns from './QueAns';
//import TeacherQA from './TeacherQA';

const FinalQuesAns = () => {
    const [userType,setUserType] = useState('');
    const navigate = useNavigate();
        
    useEffect(() => {
        // Fetch names from the backend API
        axios.get('http://localhost:8080/college/finalQA',{withCredentials:true})
        .then(res => {   
            setUserType(res.data);
            console.log(userType);      
        })
        .catch(error => {
            console.error('Error fetching names:', error);
        });
    }, []);

    const goto = () =>{ 
        if(userType === 'Teacher'){
            navigate('/TeacherQA');
        }
        else{
            navigate('/QueAns');
        }
    }
    return (
        <div>
            <div id={QueAnsCss.lodingBar}>
            <div class="spinner-border" style={{width:'3rem', height:'3rem'}} role='status'>
                <span className="visually-hidden">...Loading</span>
            </div>
            <div class="spinner-grow" style={{width:'3rem', height:'3rem'}} role='status'>
                <span className="visually-hidden">...Loading</span>
            </div><br/>
            <button onClick={goto}>Go</button>
            </div>
        </div>
    )
}

export default FinalQuesAns

