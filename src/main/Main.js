import React, { Component } from 'react';
import './Main.css';

var data = [
    {
      "id": 2,
      "name": "Marmik Desai",
      "age": "27",
      "description": "Front End Developer",
      "image": {
        "src": "https://goo.gl/yaGkXS",
        "name": "Marmik",
        "height": 50,
        "width": 50
      },
      "button": {
          "data": "Click Here"
      }
    },
    {
      "id": 2,
      "name": "Marmik Desai",
      "age": "25",
      "description": "Front End Developer",
      "image": {
        "src": "https://goo.gl/JuW5S0",
        "name": "Marmik",
        "height": 50,
        "width": 50
      },
      "button": {
          "data": "Contact Me"
      }
    }
  ];

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
//        this.state = {responseJson};
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

class User extends React.Component {
  render() {
    const data1 = this.props.user;
    return (
      <div className="wrapper">
        <div>{data1.id}</div>
        <div>{data1.name}</div>
        <div>{data1.lineStatuses[0].statusSeverityDescription}</div>
        <div>{data1.email}</div>
      </div>
    )
  }
}

export default Main;
