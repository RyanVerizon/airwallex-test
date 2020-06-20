import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputField = ({
  id,
  type,
  name,
  className,
  fieldClassName,
  required,
  valid,
  disabled,
  readonly,
  label,
  placeholder,
  errMessage,
  defaultMessage,
  attributes,
  defaultValue,
  onInput,
  onFocus,
  onBlur,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div
      className={classNames(
        'input-field',
        `input-field--${type}`,
        className,
        {
          'input-field--disabled': disabled,
          'input-field--error': valid === false,
          'input-field--valid': valid === true,
        },
      )}
    >
      <If condition={label}>
        <label
          htmlFor={id}
          className={classNames('input-field__label', {
            'input-field__label--required': required,
          })}
        >
          { label }
        </label>
      </If>
      <div className="input-field__input-container">
        <Choose>
          <When condition={type === 'textarea'}>
            <textarea
              id={id}
              name={name}
              className={classNames('input-field__textarea', fieldClassName)}
              disabled={disabled}
              placeholder={placeholder}
              required={required}
              readOnly={readonly}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              value={value}
              {...attributes}
            />
          </When>
          <Otherwise>
            <input
              type={type}
              id={id}
              name={name}
              className={classNames('input-field__input', fieldClassName)}
              disabled={disabled}
              placeholder={placeholder}
              required={required}
              readOnly={readonly}
              onChange={handleChange}
              onInput={onInput}
              onFocus={onFocus}
              onBlur={onBlur}
              value={value}
              {...attributes}
            />
          </Otherwise>
        </Choose>

        <If condition={valid === false && errMessage}>
          <div className="input-field__error-message">{ errMessage }</div>
        </If>
        <If condition={valid !== false && defaultMessage}>
          <div className="input-field__default-message">{ defaultMessage }</div>
        </If>
      </div>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  fieldClassName: PropTypes.string,
  required: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  defaultMessage: PropTypes.string,
  attributes: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',
  className: null,
  fieldClassName: null,
  required: false,
  valid: null,
  disabled: false,
  readonly: false,
  label: null,
  placeholder: null,
  errMessage: '',
  defaultMessage: null,
  attributes: {},
  defaultValue: null,
  onInput: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

export default InputField;
