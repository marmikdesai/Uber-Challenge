import React, { Component } from 'react';
import './LineDetails.css';

class LineDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      form: this.props.lineName,
    }
  }

  componentDidMount() {
    return fetch(`https://api.tfl.gov.uk/Line/Search/${this.state.form}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let dir = responseJson.searchMatches[0].lineRouteSection;
        dir.sort(function(a,b){return a.direction > b.direction})

        this.setState({
          isLoading: false,
          data: dir
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
      <div>
        <div>{this.props.lineName}</div>
        <div className="tube-service title">
          <div>destination</div>
          <div>direction</div>
          <div>fromStation</div>
          <div>serviceType</div>
          <div>vehicleDestinationText</div>
        </div>
        <div>{group}</div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    return fetch(`https://api.tfl.gov.uk/Line/Search/${nextProps.lineName}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        let dir = responseJson.searchMatches[0].lineRouteSection;
        dir.sort(function(a,b){return a.direction > b.direction})

        this.setState({
          isLoading: false,
          data: dir
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

class SericeList extends Component {
  render() {
    return (
      <div className="tube-service">
        <div>{this.props.lineStatus.destination}</div>
        <div>{this.props.lineStatus.direction}</div>
        <div>{this.props.lineStatus.fromStation}</div>
        <div>{this.props.lineStatus.serviceType}</div>
        <div>{this.props.lineStatus.vehicleDestinationText}</div>
      </div>
    )
  }
}

class TubeService extends Component {
  render() {
    const data = this.props.service;
    return (
      <SericeList name={data.name} lineStatus={data} />
    )
  }
}

export default LineDetails;
