import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';
import Search from '../Search/Search';

class Home extends Component {

  render(){
    return (
    <div className="Home-main">
      <Header/>
      <div className="Home-title">
       <h1>Free Utah Basement Quote</h1>
       <p>Thinking of finishing your basement? Not sure where to go, how long it will take, or how much to budget?</p>
       <p>Our database of qualified/licensed contracts provide you with accurate, timely quotes to finish your dream basement.</p>
      </div>
      <Search/>
    </div>
  );
}
}

export default Home;