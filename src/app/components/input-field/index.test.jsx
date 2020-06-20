import React from 'react';
import { shallow } from 'enzyme';
import InputField from '~components/input-field';

const defaultProps = { id: '', name: '' };

describe('<InputField />', () => {
  describe('Render', () => {
    it('should render InputField by default', () => {
      const wrapper = shallow(<InputField {...defaultProps} />);

      expect(wrapper.find('.input-field')).toHaveLength(1);
    });

    it('should render textare when type is textarea', () => {
      const props = { ...defaultProps, type: 'textarea' };
      const wrapper = shallow(<InputField {...props} />);

      expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should have .input-field__label when label is not null', () => {
      const props = { ...defaultProps, label: 'Label' };
      const wrapper = shallow(<InputField {...props} />);

      expect(wrapper.find('.input-field__label')).toHaveLength(1);
    });

    it('should have input-field__label--required when label is not null and required is true', () => {
      const props = {
        ...defaultProps,
        label: 'Label',
        required: true,
      };
      const wrapper = shallow(<InputField {...props} />);

      expect(wrapper.find('.input-field__label--required')).toHaveLength(1);
    });

    it('should have input-field--disabled when disabled is true', () => {
      const props = { ...defaultProps, disabled: true };
      const wrapper = shallow(<InputField {...props} />);

      expect(wrapper.find('.input-field--disabled')).toHaveLength(1);
    });

    it('should have input-field--error when valid is false amd errMessage is not null', () => {
      const props = {
        ...defaultProps,
        valid: false,
        errMessage: 'abc',
      };
      const wrapper = shallow(<InputField {...props} />);
      expect(wrapper.find('.input-field--error')).toHaveLength(1);
    });

    it('should trigger callback function when value change', () => {
      const mockClickHandler = jest.fn();
      const props = { ...defaultProps, onChange: mockClickHandler };
      const wrapper = shallow(<InputField {...props} />);
      wrapper.find('.input-field__input').simulate('change', { target: { value: 'My new value' } });
      expect(mockClickHandler.mock.calls).toHaveLength(1);
    });

    it('should trigger callback function when value input', () => {
      const mockInputHandler = jest.fn();
      const props = { ...defaultProps, onInput: mockInputHandler };
      const wrapper = shallow(<InputField {...props} />);
      wrapper.find('.input-field__input').simulate('input', { target: { value: 'My new value' } });
      expect(mockInputHandler.mock.calls).toHaveLength(1);
    });

    it('should trigger callback function when it on focus', () => {
      const mockFocusHandler = jest.fn();
      const props = { ...defaultProps, onFocus: mockFocusHandler };
      const wrapper = shallow(<InputField {...props} />);
      wrapper.find('.input-field__input').simulate('focus');
      expect(mockFocusHandler.mock.calls).toHaveLength(1);
    });

    it('should trigger callback function when it on blur', () => {
      const mockBlurHandler = jest.fn();
      const props = { ...defaultProps, onBlur: mockBlurHandler };
      const wrapper = shallow(<InputField {...props} />);
      wrapper.find('.input-field__input').simulate('blur');
      expect(mockBlurHandler.mock.calls).toHaveLength(1);
    });
  });
});
