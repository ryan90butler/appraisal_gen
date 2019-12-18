import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return (
      <div className="Header">
      <ul className="flex-box">
        <li><a href="/">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="FAQ">FAQ</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
          </div>
  );
}
}

export default Header;