import React from 'react'
import "./Forgot.css"
export default function Forgot() {
    return (
        <div className="forgot-page">
                <div className="form">

                    <form>

                        <input type="text" placeholder=" Email Id" />
                        <input type="password" id="password" placeholder=" New Password" />
                        <input type="newPassword" id="newPassword" placeholder=" Confirm Password" />

                        <br />
                        <br />
                        <button>SUBMIT</button> 
                        <p className="message"></p>
                    </form>

                    {/* <form className="forgot-form">
                        <button type="button" onclick="window.location.href='signup.html'">SIGN UP</button>
                    </form> */}
                </div>
            </div >
       
    )
}
