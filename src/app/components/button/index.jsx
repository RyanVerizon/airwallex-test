import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  className, htmlType, secondary, disabled, onClick, children,
}) => (
  <button
    className={classNames('button', className, {
      'button--secondary': secondary,
    })}
    type={htmlType}
    disabled={disabled}
    onClick={onClick}
  >
    { children }
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  htmlType: 'button',
  secondary: false,
  disabled: false,
  children: '',
  onClick: () => {},
};

export default Button;
