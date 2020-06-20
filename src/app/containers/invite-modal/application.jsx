import React from 'react';
import PropTypes from 'prop-types';
import InputField from '~components/input-field';
import Button from '~components/button';
import { useForm } from '~helpers/hooks';
import { validateEmail, validateName } from '~helpers/validation';

const InviteModalApplication = ({ isLoading, onSubmit, submitStatus }) => {
  const [formItems, setFormItem] = useForm({
    name: { value: '', valid: null },
    email: { value: '', valid: null },
    confirmEmail: { value: '', valid: null },
  });

  const handleNameChange = (e) => {
    setFormItem({
      name: {
        value: e.target.value.trim(),
        valid: validateName(e.target.value),
      },
    });
  };

  const handleEmailChange = (value, directField) => {
    const connectField = directField === 'email' ? 'confirmEmail' : 'email';

    let directValid = validateEmail(value);
    let connectValid = formItems[connectField].valid;

    if (directValid && formItems[connectField].value) {
      directValid = formItems[connectField].value === value;
    }

    if (directValid && connectValid === false) {
      connectValid = formItems[connectField].value === value;
    }

    setFormItem({
      [directField]: {
        value,
        valid: directValid,
      },
      [connectField]: {
        ...formItems[connectField],
        valid: connectValid,
      },
    });
  };

  const validateAllFields = () => {
    let valid = true;

    Object.keys(formItems).forEach((item) => {
      if (formItems[item].valid !== true) {
        setFormItem({
          [item]: { ...formItems[item], valid: false },
        });
        valid = false;
      }
    });
    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return false;
    }

    return onSubmit({
      name: formItems.name.value,
      email: formItems.email.value,
    });
  };

  return (
    <form className="invite-modal__form" noValidate onSubmit={handleFormSubmit}>
      <InputField
        id="name"
        name="name"
        required
        valid={formItems.name.valid}
        placeholder="name"
        errMessage="Please type your name"
        onBlur={handleNameChange}
      />
      <InputField
        id="email"
        name="email"
        required
        valid={formItems.email.valid}
        placeholder="Email"
        errMessage={validateEmail(formItems.email.value) ? 'You email doesn\'t match your confirm email' : 'Please type your email address'}
        onBlur={(e) => { handleEmailChange(e.target.value.trim(), 'email'); }}
      />
      <InputField
        id="confirm-email"
        name="confirm-email"
        required
        valid={formItems.confirmEmail.valid}
        placeholder="Cofirm Email"
        errMessage="Your confirm email doesn't match"
        onBlur={(e) => { handleEmailChange(e.target.value.trim(), 'confirmEmail'); }}
      />
      <Button
        htmlType="submit"
        disabled={isLoading}
      >
        { isLoading ? 'Sending, please wait...' : 'Send' }
      </Button>

      <If condition={submitStatus.errMessage}>
        <p className="invite-modal__submit-error">
          { submitStatus.errMessage }
        </p>
      </If>
    </form>
  );
};

InviteModalApplication.propTypes = {
  isLoading: PropTypes.bool,
  submitStatus: PropTypes.shape({
    errMessage: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

InviteModalApplication.defaultProps = {
  isLoading: false,
  submitStatus: {
    errMessage: '',
  },
};

export default InviteModalApplication;
