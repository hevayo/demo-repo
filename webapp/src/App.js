import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;