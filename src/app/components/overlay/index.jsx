import React from 'react';
import PropTypes from 'prop-types';
import { useLockBodyScroll } from '~helpers/hooks';

const Overlay = ({ children }) => {
  useLockBodyScroll();

  return (
    <div className="overlay">{ children }</div>
  );
};

Overlay.propTypes = {
  children: PropTypes.element,
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
