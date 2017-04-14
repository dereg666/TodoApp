import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: 'Hello!' };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const { value } = this.state;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
}

export default App;
