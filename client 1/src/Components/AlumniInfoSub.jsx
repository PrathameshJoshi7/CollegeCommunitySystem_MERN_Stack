import React, {useState, useEffect} from 'react'
import profilecss from './CSS files/ProfileInfo.module.css'

const AlumniInfoSub = ({onChange}) => {
  

    const[alumiValues, setAlumniValues] = useState({
        passoutYear:"",
        company:"",
        scope:"",
        experience:"",
    });
    useEffect(() => {
      onChange(alumiValues);
    },[alumiValues, onChange]);
      

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setAlumniValues({
            ...alumiValues,
            [name]:value,
        });
    };


  return (
    <div className={profilecss.alumniMain} >
            <div className={profilecss.comyear}>
            <label className={profilecss.labelNames}>Pass Out Year</label>
            <input type='text' name='passoutYear' className={profilecss.inputTextAlumni} placeholder='DD/MM/YYYY' value={alumiValues.passoutYear} onChange={handleInputChange}/>
            {/* <br/> */}
            <label className={profilecss.labelNames}>Company Name</label>
            <input type="text" name="company" className={profilecss.inputTextAlumni} value={alumiValues.company} onChange={handleInputChange}/>
            {/* <br/> */}
            </div> 
            <div className={profilecss.ScopeExperience}>
            <label className={profilecss.labelNames}>Your Scope</label>
            <input type="text" name="scope" className={profilecss.inputTextAlumni} placeholder='Ex. Java, React' value={alumiValues.scope} onChange={handleInputChange}/>
            {/* <br/> */}
            <label className={profilecss.labelNames}>Experience</label>
            <input type='number' name='experience' className={profilecss.inputTextAlumni} value={alumiValues.experience} onChange={handleInputChange}/>
            {/* <br/> */}
            </div>
            
      
    </div>
  )
}

export default AlumniInfoSub;
