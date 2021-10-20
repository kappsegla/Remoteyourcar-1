import React from 'react'
import {useHistory} from "react-router-dom";
import {
    useRouteMatch,
    Link
} from "react-router-dom";

import '../../App.css';
import './Home.css';


function Home() {
    let history = useHistory();
    const clear = () => {

        localStorage.clear();
        history.push("/");
    };
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let {path, url} = useRouteMatch();
    // your link creation
    const newTo = {
        pathname: '/lock',
        carId: 2
    };

    return (
        <div>
            <button type="submit" className="logout" onClick={clear}>Logga ut</button>
            <div className="linkPadding"><Link to={newTo}>Lock/Unlock Car</Link></div>
        </div>
    )
}

export default Home