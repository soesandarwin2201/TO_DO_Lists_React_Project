import React, { Component } from 'react';
import TodoItem from './TodoItems';

class TodoLists extends Component {
  render() {
   const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={this.props.handleChange}
            deleteHandler={this.props.deleteHandler}
          />
        ))}
      </ul>
    );
  }
}

export default TodoLists;
