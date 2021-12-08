import React from 'react'
import "./Login.css"


export default function Login() {

    return (
        <div className="containerMain">


            <div className="login-page">
                <div className="form">

                    <form>

                        <input type="text" placeholder=" Email Id" />
                        <input type="password" id="password" placeholder="  password" />
                        <br />
                        <a href="Forgot.js">Forgot Password?</a>

                        <br />
                        <br />
                        <button>LOGIN</button>
                    
                        <p className="message"></p>
                    </form>

                    <form className="login-form">
                        <button type="button" onclick="window.location.href='SIgnup.js'">SIGN UP</button>
                    </form>
                </div>
            </div >
        </div>

    )
}
