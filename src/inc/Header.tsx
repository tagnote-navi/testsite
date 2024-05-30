import React from 'react';
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <header id="header">
      <h1 className="site-title wrapper">
        <a href="#"><img src={logo} alt="Travel Blog"/></a>
      </h1>
      <nav id="navi">
        <ul className="wrapper">
          <li><a href="#">NEW</a></li>
          <li><a href="#">COLUMN</a></li>
          <li><a href="#">SERIES</a></li>
          <li><a href="#">Q&amp;A</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
