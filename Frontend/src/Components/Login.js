import React from 'react'
import "./Login.css"
import { useState } from 'react'

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    function submit(){
        console.log(email , password);
        // e.prevent();
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

            <form className="login-form">
                <button type="button" onclick="window.location.href='signup.html'">SIGN UP</button>
            </form>
        </div>
  </div >
  </div>

    )
}
