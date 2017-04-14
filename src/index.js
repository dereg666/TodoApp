import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import './index.css';

ReactDOM.render(
  <div>
    <TodoApp />
    <TodoItem />
  </div>,
  document.getElementById('root'),
);
