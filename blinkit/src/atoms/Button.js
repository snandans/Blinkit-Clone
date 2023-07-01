import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ styles, children, onClick }) => {
  return (
    <button 
      className={styles}
      onClick={onClick} 
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.objectOf(PropTypes.node),
  onClick: PropTypes.objectOf(PropTypes.func)
};

export default Button;

