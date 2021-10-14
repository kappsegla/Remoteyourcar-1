import React from 'react'
import { useHistory } from "react-router-dom";

import '../../App.css';


function Home() {
    let history = useHistory();
    const clear = () => {
        
        localStorage.clear();
        history.push("/");
      };
    
    return (
        <button type="submit" className="logout" onClick={clear}>Logga ut</button>
    )
}

export default Home