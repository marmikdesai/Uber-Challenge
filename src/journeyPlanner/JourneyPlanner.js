import React, { Component } from 'react';
import './JourneyPlanner.css';
import Form from './form/Form';
import LineDetails from './lineDetails/LineDetails';

class JourneyPlanner extends Component {
  constructor(props) {
    super();
    this.state = {
      lineName: ''
    };
  }

  handleChange = (e) => {
    debugger
    this.setState({lineName:e.target.value});
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} lineName={this.props.lineName}/>
        <LineDetails />
      </div>
    )
  }
}

export default JourneyPlanner;
