import React from 'react';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  render() {
    return (
      <div className='addTodoContainer'>
        <h1 className='title'> To Do List </h1>
        <form
          className='form form-container'
          onSubmit={e => this.submitTodo(e)}
        >
          <input
            id='addTodoInput'
            onChange={e => this.updateInput(e)}
            type='text'
          ></input>
          <button type='submit' className='btn btn-dark'>
            {' '}
            AddTodo{' '}
          </button>
        </form>
      </div>
    );
  }
  updateInput = e => {
    this.setState({ todo: e.target.value });
  };
  submitTodo = e => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    document.getElementById('addTodoInput').value = '';
  };
}

export default AddTodo;
