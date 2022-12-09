import React, { Component } from 'react';
import TodoLists from './Todolist';
import Header from './Header';
import InputTodo from './TnputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  deleteTodo = (id) => {
    this.setState( {
      todos : [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  
  addTodoItem = (title) => {
    const newTodo = {
      id : uuidv4(),
      title : title,
      completed : false
    };
    this.setState({
      todos : [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <>
        <div className='container'>
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodoLists
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteHandler={this.deleteTodo}
          />
        </div>
      </>
    );
  }
}

export default TodoContainer;
