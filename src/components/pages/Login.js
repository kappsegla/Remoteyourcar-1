import React from 'react'
import logo from '../../images/logo.png';
import '../../App.css';
import {useState} from "react";
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

        let bodyData = {username, password};
        let data = {};

        fetch(`https://h-178-174-162-51.a536.priv.bahnhof.se/auth/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response;
            })
            .then(res => res.json())
            .then((result) => {
                data = result;
                /** @namespace data.access_token **/
                console.log(data.access_token);
                localStorage.setItem('Token', data.access_token);
                history.push("/home");
            })
            .catch(function (err) {
                const invalidElement = document.getElementById("invalid_credentials");
                invalidElement.hidden = false;
                console.log(err);
            });
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
                    <div id={"invalid_credentials"} hidden={true}>Invalid credentials</div>
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
                <p><Link to="/register" className="alink"> Register Here </Link></p>

            </div>
        </div>
    )
};


export default Login

  
  