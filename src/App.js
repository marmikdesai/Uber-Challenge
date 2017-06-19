import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;
