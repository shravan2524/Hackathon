import React from 'react'
import "./SIgnup.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function SIgnup() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [name, setname] = useState("");
    const history = useHistory();
  function submit(e){
    if(password === confirmpassword){
      axios.post("https://web-store165.herokuapp.com/api/signup", { email, name, password })
      .then((e) => {
          alert(e.data);
          history.push("/login");
      })
      .catch((err) => console.log(err));
    }
    else{
      alert("Password doesn't match");
    }
  }

    return (  
        <div className="containerMain">
        <div className="login-page">
        <div className="form">
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="full name" />
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)}  placeholder="email address" />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} id="password" placeholder="set a password" />
            <input type="password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} placeholder="Confirm password" />
            <br/>
            <br/>
            <button onClick={submit}>Sign up</button>
        </div>
      </div>
      </div>
    )
}
