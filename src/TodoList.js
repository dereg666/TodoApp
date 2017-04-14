import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import InputBar from './InputBar'
import './TodoList.css';



const A = onClickOutside(InputBar);

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export default TodoList;
