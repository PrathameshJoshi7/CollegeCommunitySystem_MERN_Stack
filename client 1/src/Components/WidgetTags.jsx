import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCookies} from "react-cookie";

import './CSS files/ForumRightBar.css'

const WidgetTags = () => {
  const [cookies , setCookies, removeCookie] = useCookies(["getQueTag"]);
  const [tags,setTag]=useState([]);
  //const [tag,setTags] = useState('');
  //const tags = ['c', 'cpp', 'python', 'javascript']
  const setTagForId = (t) =>{
    setCookies("getQueTag",t,{path:"/"});
  }
  useEffect(() => { 
    try {
      axios.get('http://localhost:8080/college/getTag',{withCredentials:true})
        .then(res => {
          setTag( res.data);
          //setShowComment(comments);
          
        })
        .catch(error => {
          console.error('Error fetching names:', error);
        });
    } catch (error) {
      console.log("error danger");
    }
  }, []);
  return (
    <div className='wigdet-tags'>
      <h4>Watched Tags</h4>
      <div className='wigdet-tags-div'>
        {
          tags.map((tag,index) => (
              <p key={index}><Link className='' to={`/TagFilterForum/${tag}`} onClick={()=>{
                setTagForId(tag)}}>{tag}</Link></p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
