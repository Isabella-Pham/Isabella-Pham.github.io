// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from '../style/App.css'

import Home from './home';
import About from './about';
import Status from './status';

class App extends Component {
  render() {
    return (
      <Router>
            <nav>
            <ul className="navbar">
              <li className="navbar"><Link to={'/'} className="nav-link"> home </Link></li>
              <li className="navbar"><Link to={'/status'} className="nav-link"> status </Link></li>
            </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/status' component={Status} />
            </Switch>
        </Router>
    );
  }
}

export default App;