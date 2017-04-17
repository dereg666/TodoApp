import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.noName,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickChange = this.clickChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(event) {
    if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'INPUT') {
      this.setState({ show: '' });
    }
    this.setState({ value: event.target.value });
  }
  clickChange() {
    this.setState({ show: '' });
  }
  handleClickOutside() {
    this.setState({ show: this.props.noName });
  }
  clickEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submitFunction();
    } else if (event.keyCode === 9) {
      this.setState({ show: this.props.noName });
    }
  }
  submitFunction() {
    // this.props.addFunction(this.state.value);
    console.log(this.state.value);
    this.setState({ value: '' });
  }
  handleKeyUp(event) {
    if (event.keyCode === 9) {
      this.setState({ show: '' });
    }
  }

  render() {
    const addStyle = {
      color: '#b2b2b2',
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
          onKeyDown={this.clickEnter}
          onKeyUp={this.handleKeyUp}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.submitFunction}
        />
      </div>
    );
  }
}

InputBar.defaultProps = {
  noName: 'Type to Add',
};

export default InputBar;
