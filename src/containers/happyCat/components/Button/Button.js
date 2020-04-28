import React from 'react';
import './Button.sass';
import PropTypes from 'prop-types';

const Button = ({ text, clickHandler }) => (
  <div className="happy-cat-button" onClick={clickHandler}>
    {text}
  </div>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
