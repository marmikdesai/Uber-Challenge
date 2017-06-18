import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Tube from './tube/Tube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Tube />
      </div>
    );
  }
}

export default App;
