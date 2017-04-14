import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import './TodoApp.css';
import InputBar from './InputBar';

const listInput = onClickOutside(InputBar);

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      numDone: 0,
      numUndone: 0,
    };
    // this.addlist = this.addlist.bind.this();
  }
  render() {
    return (
      <div className="TodoApp">
        <div className="header">
          <h1>TODO APP</h1><br/>
        </div>
        <div className="appInputBar">
          <listInput />
        </div>
      </div>
    );
  }
}

export default TodoApp;