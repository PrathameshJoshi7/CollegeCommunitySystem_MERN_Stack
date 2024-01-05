import { useState } from "react";
import loginCSS from './CSS files/LoginPage.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/college/auth", {
        email: email,
        password: password,
      },{ withCredentials: true }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Invalid Email or Password") {
          alert("Invalid Email or Password");
        }
        else if (res.data.message === "logged in successfully") {
          //alert("Login successful");

          let text="have you filled the profile information already..?\n if yes then press OK.\n Else press Cancle to continue";
          if(window.confirm(text) === true){
            navigate('/HomePage');
          } else {
            navigate('/ProfileInfo');
          }
        }
        else {
          alert("Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }


    catch (err) {
      alert(err);
    }

  }

  return (
    <div className={loginCSS.lmainDiv}>
      {/* <div class="container"> */}
        {/* <div class="row"> */}
          <label className={loginCSS.lheading}>Login</label>
        {/* </div> */}

        {/* <div class="row">
          <div class="col-sm-6"> */}

            <form className={loginCSS.lform}>
              {/* <div class="form-group"> */}
                <label className={loginCSS.lLabel}>Email</label>
                <input type="email"
                  className={loginCSS.lInput}
                  id="email"
                  placeholder="Enter Name"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

              {/* </div> */}

              {/* <div class="form-group"> */}
                <label className={loginCSS.lLabel}>Password</label>
                <input type="password"
                  className={loginCSS.lInput}
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              {/* </div> */}
              <div className={loginCSS.lbtnDiv}>
              <button type="submit" className={loginCSS.lbtn} onClick={login} >Login</button>
              <label className={loginCSS.lSignUp}>Haven't Account ? <a href='/'>SignUp</a></label>
              </div>
              
            </form>

          {/* </div> */}
        {/* </div>
      </div> */}

    </div>
  );
}

export default Login;


