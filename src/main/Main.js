import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    return fetch('https://api.tfl.gov.uk/line/mode/tube/status')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading) {
      return (
        <div>Loading</div>
      )
    }

    let group = [];
    this.state.data.forEach((service, i) => {
      group.push(<TubeService service={service} key={i} />)
    });
    return (
      <div>{group}</div>
    )
  }
}

class SericeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tube-service">
        <div>{this.props.name}</div>
        <div>{this.props.lineStatus}</div>
      </div>
    )
  }
}

class TubeService extends Component {
  render() {
    const data = this.props.service;
    return (
      <SericeList name={data.name} lineStatus={data.lineStatuses[0].statusSeverityDescription} />
    )
  }
}

export default Main;
