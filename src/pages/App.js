// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from '../style/App.css'

import Home from './home';
import About from './about';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="app">
            <nav>
            <ul className="navbar">
              <li className="navbar"><Link to={'/'} className="nav-link"> home </Link></li>
              <li className="navbar"><Link to={'/about'} className="nav-link"> about </Link></li>
            </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;