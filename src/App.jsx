import React, { Component } from 'react';
import './App.css';
import UserInputForm from './components/UserInputForm/UserInputForm';
import TodoList from './components/TodoList/TodoList';
import uuid from 'uuid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
      todos: [],
      userInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.state));
  }

  handleChange(inputValue) {
    this.setState({
      userInput: inputValue,
    });
  }

  handleSubmit() {
    const { state } = this;
    const newTodo = {
      key: uuid.v4(),
      item: state.userInput,
      complete: false,
    };
    if (newTodo.item.length < 1) return;
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      userInput: '',
    }), this.saveToLocalStorage);
  }

  removeTodo(key) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => key !== todo.key),
    }), this.saveToLocalStorage);
  }

  toggleComplete(key) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.key === key) {
        /* eslint no-param-reassign: "error" */
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    }, this.saveToLocalStorage);
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <header className="heading">
          <h1>TO-DO-LOO</h1>
          <h5 className="sub-heading">Your online todo list</h5>
        </header>
        <main className="main-content-container">
          <UserInputForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <TodoList
            removeTodo={this.removeTodo}
            toggleComplete={this.toggleComplete}
            todos={todos}
          />
        </main>
      </div>
    );
  }
}

export default App;
