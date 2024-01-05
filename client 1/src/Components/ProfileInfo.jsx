import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import StudInfoSub from './StudInfoSub';
import AlumniInfoSub from './AlumniInfoSub';
import TeacherInfo from './TeacherInfo';
import profilecss from './CSS files/ProfileInfo.module.css'

//import { type } from '@testing-library/user-event/dist/type';

const ProfileInfo = ({setAlumniValues,setStudValues,setinputList}) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: "",
    
    selectOption: "",

  });

  const [importComValues, setImportComValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

  };

  const handleImportComValues = (newImportComValues) => {
    setImportComValues(newImportComValues);
  }
  async function handleFormSubmit(event){
    event.preventDefault();
    try{
    await axios.post("http://localhost:8080/college/profileinfo",{
      fullName: formValues.fullName,
      selectOption: formValues.selectOption,
      allValue:importComValues
    },{withCredentials:true})
    .then((res) => 
      {
      if(res.data.message === "Submited Succesfully"){
        console.log(formValues)
        console.log(importComValues)
        alert("Successful..");
        navigate('/HomePage');
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
  };

  return (
    <div><Header/>
    <div className={profilecss.mainDiv}>
      <label className={profilecss.mainHead} > Profile Information</label>
      <form onSubmit={handleFormSubmit} className={profilecss.formFrame}>
        <label className={profilecss.labelNames}>Full Name</label>

        <input type='text' name="fullName" className={profilecss.inputText1} placeholder='Enter a Full Name' value={formValues.fullName} onChange={handleInputChange} />

        
        <div className={profilecss.selectionOption}>
          <label className={profilecss.labelNames}> Select Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <span className={profilecss.mobileview}>
            <input type='radio' id="Student" className={profilecss.checkPoint} name='selectOption' value="Student" checked={formValues.selectOption === "Student"} onChange={handleInputChange} />
            <label className={profilecss.labelNames} htmlFor="Student">Student</label>

            <input type='radio' id="Teacher" className={profilecss.checkPoint} name='selectOption' value="Teacher" checked={formValues.selectOption === "Teacher"} onChange={handleInputChange} />
            <label className={profilecss.labelNames} htmlFor="Teacher">Teacher</label>

            <input type='radio' id="Alumni" name='selectOption' className={profilecss.checkPoint} value="Alumni" checked={formValues.selectOption === "Alumni"} onChange={handleInputChange} />
            <label className={profilecss.labelNames} htmlFor="Alumni">Alumni</label>
          </span>
        </div>
        <div>
          {formValues.selectOption === "Student" && (
            <StudInfoSub
              importComValues={importComValues}
              onChange={handleImportComValues}
            />
          )}
          {formValues.selectOption === "Teacher" && (
            <TeacherInfo
              importComValues={importComValues}
              onChange={handleImportComValues}
            />
          )}
          {formValues.selectOption === "Alumni" && (
            <AlumniInfoSub
              importComValues={importComValues}
              onChange={handleImportComValues}
            />
          )}
        </div>
        <br />
        <div className={profilecss.submitDiv}>
        <button type="submit" className={profilecss.submitProfile} >Save Information</button>
        </div>
      </form>
          
    </div>
    <Footer/>
    </div>
  )
}

export default ProfileInfo
