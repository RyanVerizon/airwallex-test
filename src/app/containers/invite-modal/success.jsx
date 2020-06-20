import React from 'react';
import PropTypes from 'prop-types';
import Button from '~components/button';

const InviteModalSuccess = ({ onClose }) => (
  <div className="invite-modal__success">
    <p className="invite-modal__success-text">
      You will be one of the first to experience Broccoli & Co. When we launch
    </p>
    <Button secondary onClick={ onClose }>OK</Button>
  </div>
);

InviteModalSuccess.propTypes = {
  onClose: PropTypes.func.isRequired,
};

InviteModalSuccess.defaultProps = {
  onClose: () => {},
};

export default InviteModalSuccess;
