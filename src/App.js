import React from 'react';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import {createBrowserHistory} from 'history';
import VehicleState from './components/pages/VehicleState';
import ClimateState from "./components/pages/ClimateState";
import Car from "./components/pages/Car";

function App() {
    const history = createBrowserHistory({basename: '/Remoteyourcar-1'})
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/car' exact component={Car}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/lock' exact component={VehicleState}/>
                <Route path='/climate' exact component={ClimateState}/>
            </Switch>
        </Router>
    );
}

export default App;