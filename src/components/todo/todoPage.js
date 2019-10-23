import React from 'react';
import './todopage.css';

import TodoList from './todoList/todoList.js';
import AddTodo from './addTodo/addTodo.js';

class TodoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className='todo-container'>
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList
          updateTodoFn={this.updateTodo}
          todos={this.state.todos}
        ></TodoList>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({
        todos: savedTodos
      });
    } else {
      console.log('no todos');
    }
  };

  addTodo = async todo => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false
        }
      ]
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  };

  updateTodo = async todo => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          _todo
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.removeItem('todos', JSON.stringify(this.state.todos));
  };
}

export default TodoPage;
