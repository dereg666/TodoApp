import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      changeName: this.props.listName.substr(this.props.listName.indexOf(' ') + 1),
      changeNameHolder: 'Type to change',
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
    } else if (this.state.editing === 1) {
      this.setState({ changeNameHolder: '' });
    }
  }
  textBlur() {
    if (this.state.editing === 0) {
      this.setState({ addItemHolder: 'Type to add items' });
    } else if (this.state.editing === 1) {
      this.setState({ changeNameHolder: 'Type to change' });
      this.state.changeName ? this.submitFunction() : undefined;
    }
  }
  handleChange(event) {
    if (this.state.editing === 0) {
      this.setState({ addItemValue: event.target.value });
    } else if (this.state.editing === 1) {
      this.setState({ changeName: event.target.value });
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
    } else if (this.state.changeName && this.state.editing === 1) {
      // console.log(this.state.changeName);
      this.props.changeNameFunc(num, this.state.changeName);
      this.setState({ editing: 0 });
    }
  }
  clickEditListName() {
    this.setState({ editing: 1 });
  }

  render() {
    return (
      <div className="list">
        <div className="listTitle">
          {this.state.editing === 0 ?
            <span>
              {this.props.listName.substr(this.props.listName.indexOf(' ') + 1) }
              <button type="button" onClick={this.clickEditListName}>Edit</button>
            </span> :
            <span>
              <input
                type="text"
                value={this.state.changeName}
                placeholder={this.state.changeNameHolder}
                onKeyDown={this.clickEnter}
                onChange={this.handleChange}
                onFocus={this.textFocus}
                onBlur={this.textBlur}
              />
              <input
                type="submit"
                value="Submit"
                onClick={this.submitFunction}
              />
            </span>
          }
          <button
            type="button"
            onClick={() => this.props.deleteListsFunc(Number(this.props.listName.split(' ', 1)))}
          >Delete</button>
        </div><br />
        <div className="listInputBar">
          <input
            type="text"
            value={this.state.addItemValue}
            placeholder={this.state.addItemHolder}
            onKeyDown={this.clickEnter}
            onChange={this.handleChange}
            onFocus={this.textFocus}
            onBlur={this.textBlur}
          />
          <input
            type="submit"
            value="Add"
            onClick={this.submitFunction}
          />
        </div> <br />
        <div>
          {this.props.listItems.map(Is => <TodoItem
            itemName={Is.itemName}
            itemState={Is.itemState}
            checkItemsFunc={this.props.checkItemsFunc}
            deleteItemsFunc={this.props.deleteItemsFunc}
            showMode={this.props.showMode}
          />)}
        </div><br /><br />
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
  changeNameFunc: PropTypes.func.isRequired,
  deleteListsFunc: PropTypes.func.isRequired,
  showMode: PropTypes.number.isRequired,
};

export default TodoList;
