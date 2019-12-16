import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
        <Router>
          <Switch>
            <Route path={`/contact`}/>
            <Route path={`/about`}/>
            <Route path={`/`} component={Home}/>
          </Switch>
        </Router>
    </div>
    );
  }
}

export default App;