import React, { Component } from 'react';

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'Type to add',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickChange = this.clickChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  clickChange() {
    this.setState({ show: '' });
  }
  handleClickOutside() {
    this.setState({ show: 'Type to add' });
  }
  render() {
    const addStyle = {
      color: '#d2d3d5',
    };
    const valueSyle = {
      color: 'black',
    };
    return (
      <div>
        <input
          type="text"
          style={this.state.value ? valueSyle : addStyle}
          value={this.state.value ? this.state.value : this.state.show}
          onChange={this.handleChange}
          onClick={this.clickChange}
        />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default MyInput;
