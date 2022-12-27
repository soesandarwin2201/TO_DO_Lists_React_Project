import React, { Component } from 'react';

class TOdoItem extends Component {
  render() {
    return (
      <li>
        <input
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChange(this.props.todo.id)}
          className='form-control'
        />
        <button onClick={() => this.props.deleteHandler(this.props.todo.id)} className='btn btn-success btn-sm m-2'>
          Delete
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TOdoItem;
