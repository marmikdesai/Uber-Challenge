import React, { Component } from 'react';
import './JourneyPlanner.css';
import Form from './form/Form';
import LineDetails from './lineDetails/LineDetails';

class JourneyPlanner extends Component {
  constructor(props) {
    super();
    this.state = {
      lineName: "victoria"
    };
  }

  handleChange = (e) => {
    console.log("here")
    this.setState({lineName:e.target.value});
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} lineName={this.state.lineName}/>
        <LineDetails lineName={this.state.lineName} />
      </div>
    )
  }
}

export default JourneyPlanner;
