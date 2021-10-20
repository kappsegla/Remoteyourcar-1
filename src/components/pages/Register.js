import React from 'react'
import logo from '../../logo.png';
import '../../App.css';
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  

  const registerasig = async e => {
    e.preventDefault();
     await axios.post(
      "https://h-178-174-162-51.a536.priv.bahnhof.se/sign-up/",{

  username,
  password 
 
   }  
    );
    
   
  };
  
  
  
 
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
      <form onSubmit={registerasig}>
        <div className="username-div">
        
        <label>
          <input type="email" placeholder="Email:" id="Mail" value={username} onChange={({ target }) => setUsername(target.value)}  required/>
        </label>
</div>


        <div className="Password-div">
        <label>
          <input type="password" placeholder="Password:" id="password" value={password} onChange={({ target }) => setPassword(target.value)} required/>
        </label>
        </div>
        <div>
          <button type="submit" className="login-button">Registera</button>
          
        </div>
      </form>
    </div>
   

    </div>
        </div>
    )
};

export default Register
