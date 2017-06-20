import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      lineName: '',
      submitDisabled: true
    }
  }

  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);

    return (
      (e.target.value.toLowerCase() === "bakerloo"
        || e.target.value.toLowerCase() === "central"
        || e.target.value.toLowerCase() === "circle"
        || e.target.value.toLowerCase() === "district"
        || e.target.value.toLowerCase() === "hammersmith & city"
        || e.target.value.toLowerCase() === "jubilee"
        || e.target.value.toLowerCase() === "metropolitan"
        || e.target.value.toLowerCase() === "northern"
        || e.target.value.toLowerCase() === "piccadilly"
        || e.target.value.toLowerCase() === "victoria"
        || e.target.value.toLowerCase() === "waterloo & city"
      )
        ? this.setState({ submitDisabled: false })
        : this.setState({ submitDisabled: true })
    )
  }

  handleSubmit = (e, message) => {
    e.preventDefault();
    let formData = {
      lineName: this.state.lineName
    }
    this.props.onUpdate(this.state.lineName.toLowerCase())
  }

  render() {
    return (
      <div className="form">
        <p>Please write one tube line name in input</p>
        <span>bakerloo</span>
        <span>central</span>
        <span>circle</span>
        <span>district</span>
        <span>hammersmith & city</span>
        <span>jubilee</span>
        <span>metropolitan</span>
        <span>northern</span>
        <span>piccadilly</span>
        <span>victoria</span>
        <span>waterloo & city</span>
        <form onSubmit={this.handleSubmit}>
          <input name='lineName' type='text' placeholder="lineName" required onChange={this.handleChange} value={this.state.lineName} />
          <button type="submit" disabled={this.state.submitDisabled}>Plan</button>
        </form>
      </div>
    )
  }
}

export default Form;
