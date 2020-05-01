import React from 'react';
import './Button.sass';
import PropTypes from 'prop-types';

const Button = ({ text, clickHandler }) => (
  <div className="spider-cat-button" onClick={clickHandler}>
    {text}
  </div>
);

export default Button;

Button.displayName = 'Button';

Button.defaultProps = { text: 'click' };

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
