import React, {useEffect} from 'react'
import {useHistory, useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import {isTokenExpired} from "../utils/utils";
import carlogo from '../../images/carlogo.png'
import templogo from '../../images/templogo.png'

import '../../App.css';
import './Car.css';
import NavigateUp from "./NavigateUp";

function Car(props) {
    let history = useHistory();
    let token = localStorage.getItem('Token');
    const location = useLocation();
    const {carId} = location.state;

    useEffect(() => {
        console.log(carId);
        if (token != null && isTokenExpired(token)) {
            localStorage.removeItem('Token');
            history.push("/");
        }
    });

    return (
        <div>
            <h1>Your Car</h1>
            <div hidden={true}>{carId}</div>
            <NavigateUp/>
            <div className="linkPadding row" key={carId} id={"carId" + carId}>
                <Link className="column" to={{pathname: '/lock', carId: carId}}>
                    <img src={carlogo} alt={'Lock and unlock car'}/>
                    <div className="imagetext">{"Lock/Unlock"}</div>
                </Link>
                <Link className="column" to={{pathname: '/climate', carId: carId}}>
                    <img src={templogo} alt={'Temperature settings'}/>
                    <div className="imagetext">{"Climate Control"}</div>
                </Link>
            </div>
        </div>
    )
}

export default Car