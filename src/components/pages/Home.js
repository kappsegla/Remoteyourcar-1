import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {isTokenExpired} from "../utils/utils";

import '../../App.css';
import './Home.css';
import ColoredCar from "./ColoredCar";

function Home() {
    let history = useHistory();
    let token = localStorage.getItem('Token');
    const [cars, setCars] = useState([]);

    const clear = () => {
        localStorage.clear();
        history.push("/");
    };

    const navigate = (id, name) => {
        localStorage.setItem('carId', id);
        localStorage.setItem('carName', name)
        history.push("/car");
    };

    useEffect(() => {
        const vehiclesList = () => {
            const myHeaders = new Headers();
            const AuthStr = 'Bearer '.concat(token);
            myHeaders.append('Authorization', AuthStr);
            fetch(`https://h-178-174-162-51.a536.priv.bahnhof.se/api/1/vehicles`,
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
                    setCars(result);
                    console.log("Received Vehicles");
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        if (token != null && isTokenExpired(token)) {
            localStorage.removeItem('Token');
            history.push("/");
        }
        vehiclesList();
    }, [token, history]);

    return (
        <div>
            <h1>My Garage</h1>
            <button type="submit" className="logout" onClick={clear}>Logga ut</button>
            {
                cars.map((item) => <div className="linkPadding row" key={item.carId} id={"carId" + item.carId}>
                    {/*<Link className="column" to={{pathname: `/car`, state: {carId: item.carId}}}>*/}
                    <div className={"column"} onClick={() => navigate(item.carId, item.name)}>
                        <div className="garageimagetext">
                            <ColoredCar color={item.color}/>
                        </div>
                        <div className="garageimagetext">{"Vin:" + item.vin}<br/>{item.name}<br/>{item.color}</div>
                    </div>
                    {/*</Link>*/}
                </div>)
            }
        </div>
    )
}

export default Home