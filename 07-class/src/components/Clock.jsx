/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TimeTravel from './TimeTravel';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: 'Tuesday',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  updateDay = (day) => {
    this.setState({
      day,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello World, we are on {this.state.day}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} on React Radio Dab</h2>
        <TimeTravel actionOnClick={this.updateDay} />
      </div>
    );
  }
}

export default Clock;
