import React from 'react'
import "./SIgnup.css"

export default function SIgnup() {
    return (
        <div className="containerMain">
        <div className="login-page">
        <div className="form">
          <form>
            {/* <lottie-player
            src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
              background="transparent"
              speed="1"
              style="justify-content: center"
              loop
              autoplay
            ></lottie-player> */}
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email address" />
            <input type="text" placeholder="pick a username" />
            <input type="password" id="password" placeholder="set a password" />
            <i className="fas fa-eye" onclick="show()"></i>
            <br/>
            <br/>
          </form>

          <form className="login-form">
            <button type="button" onclick="window.location.href='login.html'">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      </div>
    )
}
