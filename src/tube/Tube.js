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
        console.log("call again")
        this.update();
      }, 10000
    );
  }

  update() {
    return fetch('https://api.tfl.gov.uk/StopPoint/940GZZLUODS/Arrivals?mode=tube')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.sort(function(a,b){
        	return timeFunction(a.expectedArrival, b.expectedArrival)
        })
        this.setState({
          isLoading: false,
          data: responseJson
        });
      }).then()
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
      var group = [];
      this.state.data.forEach((user, i) => {
        group.push(<User user={user} key={i} />)
      });
      return (
        <div>{group}</div>
      )
    }

  componentWillUnmount() {
    clearInterval(this.timerID)
    this.setState({
      isLoading: false
    });
  }
}

function timeFunction(a,a1){
  var newDate1 = new Date(a.slice(0,-1).replace("T"," "))
  var newDate2 = new Date(a1.slice(0,-1).replace("T"," "))
  var finalDate = Math.floor((newDate1-newDate2)/1000/60).toString();
  return finalDate
}

class User extends React.Component {
  render() {
    const data1 = this.props.user;
    var a = data1.expectedArrival;
    var a1 = data1.timestamp;
    return (
      <div className="wrapper">
        <div>{Math.abs(data1.id)}</div>
        <div>{data1.lineName}</div>
        <div>{data1.currentLocation}</div>
        <div>{data1.destinationName}</div>
        <div>{timeFunction(a,a1)}</div>
        <div>{data1.platformName}</div>
        <div>{data1.stationName}</div>
      </div>
    )
  }
}

export default Tube;
