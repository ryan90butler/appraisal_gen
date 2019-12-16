import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
<ul className="flex-box">
  <li><a href="/">Home</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="about">About</a></li>
</ul>
    </div>
  );
}

export default Header;