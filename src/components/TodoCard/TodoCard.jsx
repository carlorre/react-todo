import React from 'react';
import PropTypes from 'prop-types';
import './TodoCard.css';

const TodoCard = ({ todo, removeTodo, toggleComplete }) => (
  <div className={todo.complete === true ? 'todo-complete' : ''}>
    <div className="todo-card">
      <button onClick={() => toggleComplete(todo.key)} className="todo-button" type="button">
        { todo.complete === false
          ? <i className="fa fa-circle-o" aria-label="incomplete" />
          : <i className="fa fa-check-circle-o" aria-label="complete" />}
      </button>
      <li className={todo.complete === true ? 'line-through' : ''}>
        {todo.item}
      </li>
      <button
        className={todo.complete === false ? 'btn-hidden' : ''}
        onClick={() => removeTodo(todo.key)}
        type="button"
      >
        <i className="fa fa-trash-o" aria-label="Remove" />
      </button>
    </div>
  </div>
);

TodoCard.defaultProps = {
  todo: [{}],
};

TodoCard.propTypes = {
  todo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool])),
  removeTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoCard;
