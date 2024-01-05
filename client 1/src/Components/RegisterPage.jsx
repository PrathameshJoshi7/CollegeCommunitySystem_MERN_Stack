import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registerCSS from './CSS files/RegisterPage.module.css'

const RegisterPage = () => {
    const[rValue,setRvalue]=useState({
        fullName:'',
        email: '',
        contact:'',
        password: '',
        confirmPassword:'',
        
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
   
    const handleSubmit = async(e) => {
      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
  
      // Validation logic here
      const validationErrors = {};
      if (!rValue.fullName) {
        validationErrors.fullName = "Please enter your Full name";
      } else if(/[^a-zA-Z\s]/.test(rValue.fullName)){
          validationErrors.fullName = "Please enter only character";
      }
  
      if (!rValue.email) {
          validationErrors.email = "Please enter your email address";
        } else if (!emailRegex.test(rValue.email)) {
          validationErrors.email = "Please enter a valid email address";
        }
  
      if (!rValue.password) {
        validationErrors.password = "Please enter a password";
      } else if (rValue.password.length < 8) {
        validationErrors.password = "Password must be at least 8 characters long";
      } else if(!passwordRegex.test(rValue.password)){
        validationErrors.password="Invalid Password !";
        alert("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character")
      }
  
      if (!rValue.confirmPassword) {
        validationErrors.confirmPassword = "Please confirm your password";
      } else if (rValue.password !== rValue.confirmPassword) {
        validationErrors.confirmPassword = "Passwords do not match";
      }
      if (!rValue.contact) {
        validationErrors.contact = "Please enter your mobile number";
      } else if (!/^\d{10}$/.test(rValue.contact)) {
        validationErrors.contact = "Please enter a valid 10-digit mobile number";
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      else{
       alert("Loading...");
      }

      e.preventDefault();
      try
          {
            //alert("checking axios");
              const url="http://localhost:8080/college/profile";
              //alert("set url");
              const {rValue:res} = await axios.post(url,rValue);
              //alert("pass url value axios");
              //console.log(res.message);
              //alert("loading....");
              alert("Registation Successfully ...");
              setRvalue("");
              navigate('/login');
          }
      catch(err)
      {
            alert("Registation Failed !!!");
      }

      // Submit form if validation passed
      console.log("Form Submited Successfully",rValue);
    };
  

    const handleInputChange = (e) => {
        setRvalue({ ...rValue, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
        
      };

      

    return (
        <div className={registerCSS.rmainDiv}>
            <form onSubmit={handleSubmit} className={registerCSS.rForm} >
                <label className={registerCSS.rheading}>Welcome...</label>
                <label className={registerCSS.rLabel}>Full Name</label>
                <input type='text'
                    className={registerCSS.rinput}
                    placeholder='Enter Full Name'
                    id='fullName'
                    name='fullName'
                    value={rValue.fullName}
                    onChange={handleInputChange}/>
                    {errors.fullName && <label className={registerCSS.rerror}>{errors.fullName}</label>}

                <label className={registerCSS.rLabel}>Email</label>
                <input type='email'
                    className={registerCSS.rinput} 
                    placeholder='example@gmail.com'
                    id='email'
                    name='email'
                    value={rValue.email}
                    onChange={handleInputChange} />
                    {errors.email && <label className={registerCSS.rerror}>{errors.email}</label>}

                <label className={registerCSS.rLabel}>Mobile Number</label>
                <input type="tel" 
                    className={registerCSS.rinput} 
                    placeholder='9632587411'
                    id='contact'
                    name='contact'
                    value={rValue.contact}
                    onChange={handleInputChange} />
                    {errors.contact && <label className={registerCSS.rerror}>{errors.contact}</label>}

                <label className={registerCSS.rLabel}>Password</label>
                <input type='password' 
                    className={registerCSS.rinput}
                    placeholder='Enter Password'
                    id='password'
                    name='password'
                    value={rValue.password}
                    onChange={handleInputChange}/>
                    {errors.password && <label className={registerCSS.rerror}>{errors.password}</label>}

                <label className={registerCSS.rLabel}>Confirm Password</label>
                <input type='password' 
                    className={registerCSS.rinput}
                    placeholder='Re-Enter Password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={rValue.confirmPassword}
                    onChange={handleInputChange} />
                  {errors.confirmPassword && <label className={registerCSS.rerror}>{errors.confirmPassword}</label>}

               
               <div className={registerCSS.rbtnDiv}>
                <button type='submit' className={registerCSS.rbtn} id='rbtn' >Register</button>
                <label className={registerCSS.rLogin}>Already have Account ? <a href="/Login">Login</a></label>
                </div>


            </form>
        </div>
    )
}

export default RegisterPage;
