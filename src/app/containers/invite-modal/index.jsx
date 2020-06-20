import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Overlay from '~components/overlay';
import InviteModalApplication from '~containers/invite-modal/application';
import InviteModalSuccess from '~containers/invite-modal/success';

const InviteModal = ({ onClose }) => {
  const statusCode = {
    success: 200,
    failed: 400,
  };

  const [isLoading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    code: null,
    errMessage: null,
  });

  const handleSubmit = (values) => {
    setLoading(true);
    axios
      .post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', values)
      .then(() => {
        setSubmitStatus({
          code: statusCode.success,
        });
        setLoading(false);
      })
      .catch(error => {
        setSubmitStatus({
          code: error.code,
          errMessage: error.response?.data?.errorMessage || 'Unknown error, please try again',
        });
        setLoading(false);
      }); 
  }
 
  return (
    <Overlay>
      <div className="invite-modal">
        <button className="invite-modal__close" onClick={ onClose }/>
        <Choose>
          <When condition={ submitStatus.code === statusCode.success }>
            <h2 className="invite-modal__heading">All Done!</h2>
            <InviteModalSuccess />
          </When>
          <Otherwise>
            <h2 className="invite-modal__heading">Request an invite</h2>
            <InviteModalApplication
              isLoading={ isLoading }
              onSubmit={ handleSubmit }
              submitStatus={ submitStatus }
            />
          </Otherwise>
        </Choose>
      </div>
    </Overlay>
  )
};

InviteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

InviteModal.defaultProps = {
  onClose: () => {},
};

export default InviteModal;
