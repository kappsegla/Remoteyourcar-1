import React, {Component} from "react";
import NavigateUp from "./NavigateUp";
import carinside from '../../images/carinside.png'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './ClimateState.css'

class ClimateState extends Component {
    id = 2;
    carName = "";

    constructor(props) {
        super(props);
        this.id =  localStorage.getItem('carId');
        this.carName = localStorage.getItem('carName');

        this.state = {
            carId: 2,
            inside_temp: 10,
            outside_temp: 10,
            driver_temp_setting: 20,
            passenger_temp_setting: 20,
            min_avail_temp: 10,
            max_avail_temp: 30,
            is_front_defroster_on: true,
            is_rear_defroster_on: true,
            seat_heater_left: true,
            seat_heater_right: true,
            seat_heater_rear_left: true,
            seat_heater_rear_right: true,
            seat_heater_rear_center: true,
            battery_heater: true,
            steering_wheel_heater: true,
            wiper_blade_heater: true,
            side_mirror_heaters: true,
            timestamp: 0
        };
    }

    handleChangeDriverTemp = sliderValue => {
        this.setTemp(sliderValue, this.state.passenger_temp_setting);
        console.log("New slider value driver: " + sliderValue)
    };
    handleChangePassengerTemp = sliderValue => {
        this.setTemp(this.state.driver_temp_setting, sliderValue);
        console.log("New slider value passenger: " + sliderValue)
    };

    onSliderChangeDriver = value => {
        this.setState({driver_temp_setting: value});
    }
    onSliderChangePassenger = value => {
        this.setState({passenger_temp_setting: value});
    }

    render() {
        const marks = {
            15: {
                style: {
                    color: 'blue',
                },
                label: <strong>15°C</strong>
            },
            18: '18°C',
            20: '20°C',
            22: '22°C',
            25: '25°C',
            28: {
                style: {
                    color: 'red',
                },
                label: <strong>28°C</strong>,
            }
        };
        return (
            <div>
                <h2>{"Climate for " + this.carName}</h2>
                <div hidden={true}>{this.id}</div>
                <NavigateUp carId={this.id}/>
                <div className="container">
                    <div className="carImage"><img className="car" src={carinside} alt=""/></div>
                    <Slider className="vertical-slider-left"
                            vertical={true}
                            min={this.state.min_avail_temp}
                            max={this.state.max_avail_temp}
                            marks={marks}
                            included={false}
                            value={this.state.driver_temp_setting}
                            onAfterChange={this.handleChangeDriverTemp}
                            onChange={this.onSliderChangeDriver}
                            step={0.5}
                            tabIndex={1}
                    />
                    <Slider className="vertical-slider-right"
                            vertical={true}
                            min={this.state.min_avail_temp}
                            max={this.state.max_avail_temp}
                            marks={marks}
                            included={false}
                            value={this.state.passenger_temp_setting}
                            onAfterChange={this.handleChangePassengerTemp}
                            onChange={this.onSliderChangePassenger}
                            step={0.5}
                            tabIndex={2}
                    />
                    <span className={"temperature-left"}>{this.state.driver_temp_setting} °C</span>
                    <span className={"temperature-right"}>{this.state.passenger_temp_setting} °C</span>
                </div>
                <div className="row">
                    <div className="temperature column">Outside temp: {this.state.outside_temp} °C</div>
                    <div className="temperature column">Inside temp:{this.state.inside_temp} °C</div>
                </div>
            </div>);
    }

    componentDidMount() {
        this.reload();
    }

    reload() {
        let token = localStorage.getItem('Token');
        const myHeaders = new Headers();
        const AuthStr = 'Bearer '.concat(token);
        myHeaders.append('Authorization', AuthStr);

        fetch(`https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles/${this.id}/data_request/climate_state/`,
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
                console.log(result);
                this.setState(result);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    setTemp(driver, passenger) {
        let token = localStorage.getItem('Token');
        const myHeaders = new Headers();
        const AuthStr = 'Bearer '.concat(token);
        myHeaders.append('Authorization', AuthStr);

        fetch(`https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles/${this.id}/command/set_temps?driver_temp=${driver}&passenger_temp=${passenger}`,
            {
                method: 'POST',
                headers: myHeaders
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response;
            })
            .then(r => r.json())
            .then(res => {
                if (res) {
                    console.log('Temp set');
                    this.reload();
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

export default ClimateState;