import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from '../TodoCard/TodoCard';
import './TodoList.css';

const TodoList = ({ todos, removeTodo, toggleComplete }) => (
  <div className="flex-container">
    {todos.length === 0
      ? <div className="empty-list-msg">Your todo list is empty </div>
      : todos.map((todo) => (
        <TodoCard
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          key={todo.key}
          todo={todo}
        />
      ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoList;
