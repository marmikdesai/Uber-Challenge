import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Navigation.css';
import Main from './../main/Main';
import Tube from './../tube/Tube';
import JourneyPlanner from './../journeyPlanner/JourneyPlanner';

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

const Plan = () => (
  <div>
    <h2>Tube Line Details</h2>
    <JourneyPlanner />
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
            <Link to="/plan">Tube Line Details</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/liveNorthanLine" component={LiveNorthanLine} />
          <Route path="/plan" component={Plan} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
