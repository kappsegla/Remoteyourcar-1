import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {isTokenExpired, parseJwt} from "../utils/utils";
import carlogo from '../../images/carlogo.png'

import '../../App.css';
import './Home.css';

function Home() {
    let history = useHistory();
    let token = localStorage.getItem('Token');
    let jsonDoc = parseJwt(token);

    const clear = () => {
        localStorage.clear();
        history.push("/");
    };

    useEffect(() => {
        console.log('useEffect');
        if (token != null && isTokenExpired(token)) {
            localStorage.removeItem('Token');
            history.push("/");
        }
    });
    /** @namespace jsonDoc.vehicles **/
    let carIds = jsonDoc.vehicles;
    console.log(carIds);

    return (
        <div>
            <button type="submit" className="logout" onClick={clear}>Logga ut</button>
            {
                carIds.map((item) => <div className="linkPadding" key={item}>
                    <Link to={{pathname: '/lock', carId: item}}>
                        <div>
                            <img src={carlogo} alt={'Your car'}/>
                        </div>
                        {"Car: " + item}
                    </Link>
                </div>)
            }
        </div>
    )
}

export default Home