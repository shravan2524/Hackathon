import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

export default function Login() {
    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

       

    function submit(){
        console.log(email , password);
        axios.post("https://web-store165.herokuapp.com/api/login", { email , password })
      .then((e) => {
          alert(e.data);
          if(e.data === "Invalid Email Id / Password"){
            window.location.reload()
          }
          else{
              localStorage.setItem('email', email);
              localStorage.setItem('isLogin', 1);
              history.push("/");
          }
      })
      .catch((err) => console.log(err));
    }

    function signupfun(){
        history.push("/signup");
    }
    return (
        <div className="containerMain">      
        <div className="login-page">
            <div className="form">

                {/* <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed="1" style="justify-content: center;" loop autoplay></lottie-player> */}
                <input type="text" placeholder=" Email Id" value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" id="password" placeholder="  password" value={password} onChange={(e) => setpassword(e.target.value)} />
                {/* {<CgProfile />} */}
                <br />
                <br />
                <button onClick={submit}>LOGIN</button>
                <p className="message"></p>

                {/* <button type="button" onclick={signupfun}>SIGN UP</button> */}
                <button onClick={signupfun}>SIGN UP</button>
        </div>
        </div>
        </div>

    )
}
