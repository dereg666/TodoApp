import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';



class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ((this.props.showMode - this.props.itemState) === 0 ?
      null :
      <div className="todoItem">
        <input
          type="checkBox"
          defaultChecked={this.props.itemState}
          onClick={() => this.props.checkItemsFunc(Number(this.props.itemName.split(' ', 1)))}
        />
        <label htmlFor="item">{this.props.itemName.substr(this.props.itemName.indexOf(' ') + 1)}</label>
        <button
          type="button"
          onClick={() => this.props.deleteItemsFunc(Number(this.props.itemName.split(' ', 1)))}
        >Delete</button>
      </div>
    );
  }
}

TodoItem.defaultProps = {
  itemName: 'This is a todo',
  itemState: 0,
};

TodoItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemState: PropTypes.number.isRequired,
  checkItemsFunc: PropTypes.func.isRequired,
  deleteItemsFunc: PropTypes.func.isRequired,
  showMode: PropTypes.number.isRequired,
};

export default TodoItem;
