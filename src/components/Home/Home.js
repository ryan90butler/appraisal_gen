import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';
import Form from '../Form/Form';

class Home extends Component {

  render(){
    return (
    <div className="Home-main">
      <Header/>
      <div className="Home-title">
       <h1>Free Utah Basement Quote</h1>
       <p>Thinking of finishing your basement? Not sure who to contact, how long it will take, or how much to budget?</p>
       <p>Our database of qualified/licensed contracts provide you with accurate, timely quotes to finish your basement.</p>
      </div>
      <Form/>
    </div>
  );
}
}

export default Home;