import React from 'react'
import logo from '../../logo.png';
import '../../App.css';
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {isTokenExpired} from "../utils/utils";

const Login = () => {

    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    window.onload = function () {
        let token = localStorage.getItem('Token');

        if (token !== null && !isTokenExpired(token)) {
            console.log("Valid token found");
            history.push("/home");
        } else {
            console.log("Expired or no token");
            localStorage.removeItem('Token');
        }
    }

    const logIn = async e => {
        e.preventDefault();
        let token = await axios.post(
            "https://h-178-174-162-51.a536.priv.bahnhof.se/auth/", {

                username,
                password

            }
        );
        /** @namespace data.access_token **/
        let data = token.data;
        console.log(data.access_token);
        localStorage.setItem('Token', data.access_token);
        history.push("/home");
    };


    return (
        <div>
            <div className="con">
                <header className="App-header">
                    <h1 className="h1">
                        ITHSC
                    </h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="login-con">
                    <form onSubmit={logIn}>
                        <div className="username-div">

                            <label>
                                <input type="text" placeholder="Username:" value={username} id="username"
                                       onChange={({target}) => setUsername(target.value)} required/>
                            </label>
                        </div>
                        <div className="Password-div">
                            <label>
                                <input type="password" placeholder="Password:" id="password" value={password}
                                       onChange={({target}) => setPassword(target.value)} required/>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="login-button">Login</button>

                        </div>
                    </form>
                </div>
                <p>Forgot your Password?</p>
                <p><Link to="/register" className="alink"> New RegisterUser? Register Here </Link></p>

            </div>
        </div>
    )
};


export default Login

  
  