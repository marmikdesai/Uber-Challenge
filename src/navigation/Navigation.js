import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Navigation.css';
import Main from './../main/Main';
import Tube from './../tube/Tube';

const Home = () => (
  <div>
    <h2>Tube Service Status</h2>
    <Main />
  </div>
)

const LiveNorthanLine = () => (
  <div>
    <h2>Live Northan Line Status</h2>
    <Tube />
  </div>
)


class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/liveNorthanLine">LiveNorthanLine</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/liveNorthanLine" component={LiveNorthanLine} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
