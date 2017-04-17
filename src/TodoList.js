import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoApp.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemHolder: 'Type to add items',
      addItemValue: '',
      editing: 0,
    };
    this.textFocus = this.textFocus.bind(this);
    this.textBlur = this.textBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
    this.clickEditListName = this.clickEditListName.bind(this);
  }
  textFocus() {
    if (this.state.editing === 0) {
      this.setState({ addItemHolder: '' });
    }
  }
  textBlur() {
    if (this.state.editing === 0) {
      this.setState({ addItemHolder: 'Type to add items' });
    }
  }
  handleChange(event) {
    if (this.state.editing === 0) {
      this.setState({ addItemValue: event.target.value });
    }
  }
  clickEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submitFunction();
    }
  }
  submitFunction() {
    const num = Number(this.props.listName.split(' ', 1));
    if (this.state.addItemValue && this.state.editing === 0) {
      // console.log(this.state.addItemValue);
      this.props.addItemsFunc(num, this.state.addItemValue);
      this.setState({ addItemValue: '' });
    }
  }
  clickEditListName() {
    this.setState({ editing: 1 });
  }

  render() {
    return (
      <div className="listBlock">
        <div className="listName">
          {this.props.listName.substr(this.props.listName.indexOf(' ') + 1) }
        </div>
        <div className="listInputBar">
          <input
            className="listInputBox"
            type="text"
            value={this.state.addItemValue}
            placeholder={this.state.addItemHolder}
            onKeyDown={this.clickEnter}
            onChange={this.handleChange}
            onFocus={this.textFocus}
            onBlur={this.textBlur}
          />
          <i
            className="icon ion-plus-round myIcon whiteIcon"
            onClick={this.submitFunction}
          />
        </div>
        <div>
          {this.props.listItems.map(Is => <TodoItem
            itemName={Is.itemName}
            itemState={Is.itemState}
            checkItemsFunc={this.props.checkItemsFunc}
            deleteItemsFunc={this.props.deleteItemsFunc}
            showMode={this.props.showMode}
          />)}
        </div>
      </div>
    );
  }
}

TodoList.defaultProps = {
  listName: '0 This is a list',
  listItems: [],
};

TodoList.propTypes = {
  listName: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired,
  addItemsFunc: PropTypes.func.isRequired,
  checkItemsFunc: PropTypes.func.isRequired,
  deleteItemsFunc: PropTypes.func.isRequired,
  showMode: PropTypes.number.isRequired,
};

export default TodoList;
