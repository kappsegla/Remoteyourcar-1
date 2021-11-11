import React from 'react'
import backarrow from '../../images/backarrow.svg'
import {useHistory} from "react-router-dom";
import './NavigateUp.css';

function NavigateUp(props) {
    let history = useHistory();

    return (
        <div className="back-arrow"  onClick={() => history.goBack()}>
                <img width={50} height={50} src={backarrow} alt={'Arrow for navigating back'}/>
        </div>
    )
}

export default NavigateUp
