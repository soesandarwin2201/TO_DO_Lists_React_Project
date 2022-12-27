import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title.trim()) {
     this.props.addTodoItem(this.state.title)
     this.setState({
      title : '',
     })
    }
    else {
     alert('Please write item')
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
          name='title'
          className='form-control'
        />
        <button className='btn btn-primary btn-sm m-3'>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
