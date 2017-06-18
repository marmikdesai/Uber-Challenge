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
    return fetch('https://api.tfl.gov.uk/StopPoint/940GZZLUODS/Arrivals?mode=tube')
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
      var group = [];
      this.state.data.forEach((user, i) => {
        group.push(<User user={user} key={i} />)
      });
      return (
        <div>{group}</div>
      )
    }
}

var dateDifference = () => {
}
/*
class dateDifference extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  var a = data1.expectedArrival;
  var b = a.splice(0,-1).split("T");
  var c = b[0].split("-");
  var d = b[1].split(":");
  var newDate = new Date(c[0], (+c[1] - 1), c[2], d[0], d[1], d[2]).getTime();
  console.log(newDate)
}
*/

function timeFunction(a,a1){
  var b = a.slice(0,-1).split("T");
  var c = b[0].split("-");
  var d = b[1].split(":");
  var newDate = new Date(c[0], (+c[1] - 1), c[2], d[0], d[1], d[2]).getTime();

  var b1 = a1.slice(0,-1).split("T");
  var c1 = b1[0].split("-");
  var d1 = b1[1].split(":");
  var newDate2 = new Date(c1[0], (+c1[1] - 1), c1[2], d1[0], d1[1], d1[2]).getTime();

  var finalDate = new Date(newDate-newDate2);
  return finalDate.getMinutes();
}

class User extends React.Component {
  render() {
    const data1 = this.props.user;

    var a = data1.expectedArrival;
    var a1 = data1.timestamp;
//    var diff = timeFunction(a,a1);
/*
    var b = a.slice(0,-1).split("T");
    var c = b[0].split("-");
    var d = b[1].split(":");
    var newDate = new Date(c[0], (+c[1] - 1), c[2], d[0], d[1], d[2]).getTime();
*/
    return (
      <div className="wrapper">
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
