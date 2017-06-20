import React, { Component } from 'react';
import './Tube.css';

class Tube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.update();
      }, 10000
    );
  }

  update() {
    console.log("Tube call");
    return fetch('https://api.tfl.gov.uk/StopPoint/940GZZLUODS/Arrivals?mode=tube')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.sort(function(expectedArrival, timestamp){
        	return timeFunction(expectedArrival.expectedArrival, timestamp.expectedArrival)
        });

        this.setState({
          isLoading: false,
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div>Loading</div>
      )
    }

    let group = [];
    this.state.data.forEach((service, i) => {
      group.push(<Service service={service} key={i} />)
    });

    return (
      <div>
        <div className="tube-service title">
          <div>ID</div>
          <div>Current Location</div>
          <div>Destination Name</div>
          <div>Train Leaving</div>
          <div>Platform Name</div>
        </div>
        <div className="tube-status">{group}</div>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    this.setState({
      isLoading: false
    });
  }
}

function timeFunction(expectedArrival, timestamp) {
  let newDate1 = new Date(expectedArrival.slice(0,-1).replace("T"," ")),
      newDate2 = new Date(timestamp.slice(0,-1).replace("T"," ")),
      finalDate = Math.floor((newDate1-newDate2)/1000/60).toString();

  return finalDate
}

class Service extends React.Component {
  render() {
    const data = this.props.service;
    let expectedArrival = data.expectedArrival,
        timestamp = data.timestamp,
        time = timeFunction(expectedArrival, timestamp);

    return (
      <div className="wrapper">
        <div> { Math.abs(data.id) } </div>
        <div> { data.currentLocation } </div>
        <div> { data.destinationName } </div>
        <div> {
            (parseInt(time, 10) === 0) ? "Arrived" : time
        } </div>
        <div> { data.platformName } </div>
      </div>
    )
  }
}

export default Tube;
