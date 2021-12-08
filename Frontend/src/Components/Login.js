import React from 'react'
import "./Login.css"
// import { CgProfile} from 'react-icons/cg';

export default function Login() {
    // function show(){
    //     var password = document.getElementById("password");
    //     var icon = document.querySelector(".fas")
  
    //     // ========== Checking type of password ===========
    //     if(password.type === "password"){
    //       password.type = "text";
    //     }
    //     else {
    //       password.type = "password";
    //     }
    //   };
    return (
        <div className="containerMain">

      
        <div className="login-page">
            <div className="form">

                <form>
                {/* <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed="1" style="justify-content: center;" loop autoplay></lottie-player> */}
                <input type="text" placeholder=" Email Id" />
                <input type="password" id="password" placeholder="  password" />
                {/* {<CgProfile />} */}
                <br />
                <br />
                <button>LOGIN</button>
                <p className="message"></p>
    </form>

            <form className="login-form">
                <button type="button" onclick="window.location.href='signup.html'">SIGN UP</button>
            </form>
        </div>
  </div >
  </div>

    )
}
