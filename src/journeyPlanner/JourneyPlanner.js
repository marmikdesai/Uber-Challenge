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

  onUpdate (data) {
    this.setState({
      lineName: data
    })
  }

  render() {
    return (
      <div>
        <Form onUpdate={this.onUpdate.bind(this)} lineName={this.state.lineName}/>
        <LineDetails lineName={this.state.lineName} />
      </div>
    )
  }
}

export default JourneyPlanner;
