import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoApp.css';

class TodoApp extends Component {
	constructor() {
 	 	super();
    	this.state = {
      	lists: [],
      	numDone: 0,
      	numUndone: 0,
      };
    this.addlist = this.addlist.bind.this();
  }
    
    
}

export default TodoApp;