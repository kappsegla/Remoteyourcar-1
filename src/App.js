import React from 'react';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import createBrowserHistory from 'history/createBrowserHistory';
import Lock from './components/pages/Lock';






function App() {
  const history = createBrowserHistory({ basename: '/Remoteyourcar' })
  return (
 

<Router history={history}>
     
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/lock' exact component={Lock} />






        </Switch>
      </Router>
    
  );
}

export default App;
