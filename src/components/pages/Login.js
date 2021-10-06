import React from 'react'
import logo from '../../logo.png';
import '../../App.css';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [anvandera, setUser] = useState()

  const ev = async e => {
    e.preventDefault();
    axios.post(
      "https://h-178-174-162-51.a536.priv.bahnhof.se/auth/",
      username, password
    );
    
  }
  

  if (anvandera) {
    return <div>{username} loggat in</div>;
  }
 
    return (
        <div>
             <div className="con">
      <header className="App-header">
      <h1 className="h1">
         ITHSC
        </h1>
    
        <img src={logo} className="App-logo" alt="logo" />
        
      
      </header>
      <div className="login-con">
      <form onSubmit={ev}>
        <div className="username-div">
        
        <label>
          <input type="text" placeholder="Username:" value={username} id="username"  onChange={({ target }) => setUsername(target.value)} required/>
        </label>
</div>
        <div className="Password-div">
        <label>
          <input type="password" placeholder="Password:" id="password" value={password} onChange={({ target }) => setPassword(target.value)} required/>
        </label>
        </div>
        <div>
          <button type="submit" className="login-button">Login</button>
          
        </div>
      </form>
    </div>
    <p>Forgot your Password?</p>
    <p><Link to="/register"> New RegisterUser? Register Here </Link></p>
    
    </div>
        </div>
    )
};


export default Login

  
  