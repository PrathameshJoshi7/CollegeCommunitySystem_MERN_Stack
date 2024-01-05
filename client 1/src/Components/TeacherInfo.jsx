import React, { useState, useEffect } from 'react'
import profilecss from './CSS files/ProfileInfo.module.css'

const TeacherInfo = ({ onChange }) => {

  const [inputList, setinputList] = useState([{ classToTeach: '', subjectName: '' }]);
  useEffect(() => {
    onChange(inputList);
  }, [inputList, onChange]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
    //console.log("Values of Handle input change ",inputList);

  }

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
    // console.log("Values of Remove change ",inputList);
  }

  const handleaddclick = () => {
    setinputList([...inputList, { classToTeach: '', subjectName: '' }]);
    //console.log("Values of add ",inputList);
  }

  return (
    <div>
      <div className="row">
        <div>

          {

            inputList.map((data, i) => {
              return (
                <div className={profilecss.teacherMain}>
                  <span>
                    {/* key={Math.floor(Math.random() * 100) + 1} */}
                    <div className={profilecss.tClassDiv} >
                      <label className={profilecss.labelNames} >Class</label>
                      <br />
                      <input type="text" name="classToTeach" value={data.classToTeach} className={profilecss.inputTextTeacher} placeholder="Class to Teach" onChange={e => handleinputchange(e, i)} />
                    </div>
                    <div className={profilecss.tSubjectDiv}>
                      <label className={profilecss.labelNames} >Subject</label>
                      <br />
                      <input type="text" name="subjectName" value={data.subjectName} className={profilecss.inputTextTeacher} placeholder="Subject Name" onChange={e => handleinputchange(e, i)} />
                    </div>
                    <div >
                      {
                        inputList.length !== 1 &&
                        <button className="btn btn-danger mx-1" onClick={() => handleremove(i)}>Remove</button>
                      }
                      {inputList.length - 1 === i &&
                        <button className="btn btn-success" onClick={handleaddclick}>Add More</button>
                      }

                    </div>
                  </span>
                </div>
              );
            })}


        </div>
      </div>

    </div>
  )
}

export default TeacherInfo
