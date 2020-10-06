import React from 'react';
import './UserInputForm.css';
import PropTypes from 'prop-types';

const UserInputForm = ({ handleSubmit, handleChange }) => (
  <form
    className="user-input-form"
    onSubmit={(e) => {
      e.preventDefault();
      e.target.reset();
      handleSubmit();
    }}
  >
    <input
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      className="input-text-box"
      placeholder="Add an item to your todo list"
      maxLength="50"
    />
    <input
      className="user-input-btn"
      type="submit"
      value="+"
    />
  </form>
);

UserInputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserInputForm;
