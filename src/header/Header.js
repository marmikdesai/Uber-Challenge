import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Uber Challenge using react.js</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
