import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
        <Router>
          <Switch>
            <Route path={`/Contact`} component={Contact}/>
            <Route path={`/About`} component={About}/>
            <Route path={`/FAQ`} component={Faq}/>
            <Route path={`/`} component={Home}/>
          </Switch>
        </Router>
    </div>
    );
  }
}

export default App;