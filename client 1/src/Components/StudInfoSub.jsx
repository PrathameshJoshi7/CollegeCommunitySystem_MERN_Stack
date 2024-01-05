import React,{useState,useEffect} from 'react'
import profilecss from './CSS files/ProfileInfo.module.css'

const StudInfoSub = ({onChange}) => {
  const[studValues,setStudValues] = useState({
    department:"",
    selectDegree:"",
    course:"",
    classStud:"",
  })
  useEffect(() => {
    onChange(studValues);
  },[studValues, onChange]);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setStudValues({
      ...studValues,
      [name]:value,
    });

  };

  return (
    <div className={profilecss.StudentSubSection}>
      
        <label className={profilecss.labelNames}>Department Name</label>
       
      <input type='text' className={profilecss.inputTextStudent} name='department' placeholder='Enter Department Name' value={studValues.department} onChange={handleInputChange}/>
      <span >
      <label className={profilecss.labelNames}>Degree &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <span className={profilecss.studentDegreeSelect}>
      <input type='radio' id="gradution" className={profilecss.checkPoint} name='selectDegree' value="graduation" checked={studValues.selectDegree==="graduation"}  onChange={handleInputChange} />
        <label htmlFor="gradution" className={profilecss.labelNames}>Graduation</label>
        <input type='radio' id="post-grduation" className={profilecss.checkPoint} name='selectDegree' value="post-graduation" checked={studValues.selectDegree==="post-graduation"}  onChange={handleInputChange}/>
        <label htmlFor="post-grduation" className={profilecss.labelNames}>Post-Gradution</label>
        </span>
        </span>
        <div className={profilecss.studentCourse}>
          <div className={profilecss.courseDiv}>
        <label className={profilecss.labelNames}>Course</label> 
        <br/>   
        <input type='text' className={profilecss.inputTextStudent} name='course' placeholder='Enrolled Course Name' value={studValues.course} onChange={handleInputChange}/>
        <br/>
        </div>
        <div className={profilecss.ClassDiv}>
        <label className={profilecss.labelNames}>Class</label>
        <br/>
        <input type='text' className={profilecss.inputTextStudent} name="classStud" placeholder='Example :B.Sc First Year, M.A. Third Year ' value={studValues.classStud} onChange={handleInputChange}/>
        <br/>
        </div>
        </div>
    </div>
  )
}

export default StudInfoSub;
