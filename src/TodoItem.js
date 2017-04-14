import React, { Component } from 'react';
import './TodoItem.css';



class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: 'Click to add' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="checkBox" value={value} onChange={this.handleChange} onClick={this.clickChange} />
        <label htmlFor="hello">Hello</label>
      </div>
    );
  }
}

export default TodoItem;
