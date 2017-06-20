import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      lineName: '',
    }
  }

  handleChange = (e) => {
    debugger
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e, message) => {
    e.preventDefault();
    let formData = {
      lineName: this.state.lineName
    }
    console.log(formData)
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input name='lineName' type='text' placeholder="lineName" required onChange={this.handleChange} value={this.state.lineName} />
          <button type="submit">Plan</button>
        </form>
      </div>
    )
  }
}

export default Form;
