import React from 'react';
import './Entrypoint.css';
import {hot} from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../../pages/Home';

function Entrypoint() {
  return (
    <div className="Entrypoint">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>  
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default hot(module)(Entrypoint);
