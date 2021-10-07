import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Lockunlock from './js-components/Lockunlock';


function App() {
  return (
    
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/lockunlock' exact component={Lockunlock} />
          <Route path='/home' exact component={Home} />
          <Route path='/register' exact component={Register} />

        </Switch>
      </Router>
    
  );
}

export default App;
