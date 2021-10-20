import React from 'react'
import backarrow from '../../images/backarrow.svg'
import {Link} from "react-router-dom";
import './NavigateUp.css';

function NavigateUp() {
    return (
        <div className="yourCar">
            <Link to={'/home'}>
                <img width={50} height={50} src={backarrow} alt={'Arrow for navigating back'}/>
            </Link>
        </div>
    )
}

export default NavigateUp
