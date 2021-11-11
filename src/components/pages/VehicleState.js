import React, {Component} from 'react';
import NavigateUp from "./NavigateUp";

import greenlock from '../../images/greenlock.svg'
import redlock from '../../images/redlock.svg'
import car from '../../images/car.png'

import './VehicleState.css'

class VehicleState extends Component {
    id=2;

    constructor(props) {
        super(props);
        this.handleLockClick = this.lockVehicle.bind(this);
        this.handleUnLockClick = this.unLockVehicle.bind(this);
        this.id = props.location.carId;

        this.state = {
            carId: 2,
            timestamp: 0,
            locked: false,
            doorState: {
                df_open: false,
                df_locked: true,
                pf_open: false,
                pf_locked: true,
                dr_open: false,
                dr_locked: true,
                pr_open: false,
                pr_locked: true,
                ft_open: false,
                ft_locked: true,
                rt_open: false,
                rt_locked: true
            }
        };
    }

    render() {
        return (
            <div>
                <h1>Vehicle State</h1>
                <div hidden={true}>{this.id}</div>
                <NavigateUp carId={this.state.carId}/>
                <div className="container">
                    <div className="carImage"><img className="car" src={car} alt=""/></div>
                    <div className="driverDoor">{this.state.doorState.df_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="0"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="0"/>
                    }</div>
                    <div className="passengerDoor">{this.state.doorState.pf_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="1"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="1"/>
                    }</div>
                    <div className="driverRearDoor">{this.state.doorState.dr_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="5"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="5"/>
                    }</div>
                    <div className="passengerRearDoor">{this.state.doorState.pr_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="6"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="6"/>
                    }</div>
                    <div className="frontTrunk">{this.state.doorState.ft_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="4"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="4"/>
                    }</div>
                    <div className="rearTrunk">{this.state.doorState.rt_locked
                        ? <img alt="Green lock symbol, locked." src={greenlock} onClick={this.handleUnLockClick}
                               tabIndex="3"/>
                        : <img alt="Red lock symbol, unlocked." src={redlock} onClick={this.handleLockClick}
                               tabIndex="3"/>
                    }</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.reload();
    }

    reload() {
        let token = localStorage.getItem('Token');
        const myHeaders = new Headers();
        const AuthStr = 'Bearer '.concat(token);
        myHeaders.append('Authorization', AuthStr);
        //console.log(myHeaders.get('Authorization') );
        fetch(`https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles/${this.id}/data_request/vehicle_state/`,
            {
                headers: myHeaders
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response;
            })
            .then(res => res.json())
            .then((result) => {
                this.setState(result);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    lockVehicle() {
        let token = localStorage.getItem('Token');
        const myHeaders = new Headers();
        const AuthStr = 'Bearer '.concat(token);
        myHeaders.append('Authorization', AuthStr);
        let url = `https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles/${this.id}/command/door_lock`
        fetch(url, {
            method: 'POST',
            headers: myHeaders
        })
            .then(r => r.json())
            .then(res => {
                if (res) {
                    console.log(`{message: "Locked car ${this.id}", response: ${res}`);
                    this.reload();
                }
            });
    }

    unLockVehicle() {
        let token = localStorage.getItem('Token');
        const myHeaders = new Headers();
        const AuthStr = 'Bearer '.concat(token);
        myHeaders.append('Authorization', AuthStr);
        let url = `https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles/${this.id}/command/door_unlock`
        fetch(url, {
            method: 'POST',
            headers: myHeaders
        })
            .then(r => r.json())
            .then(res => {
                if (res) {
                    console.log(`{message: "UnLocked car ${this.id}", response: ${res}`);
                    this.reload();
                }
            });
    }
}

export default VehicleState;