import React from 'react';
import { mount, shallow } from 'enzyme';
import InviteModalApplication from '~containers/invite-modal/application';

describe('<InviteModalApplication />', () => {
  describe('Render', () => {
    it('should render errorMessage if errMessage passed', () => {
      const wrapper = shallow(
        <InviteModalApplication submitStatus={{ errMessage: 'errorMes' }} />,
      );

      expect(wrapper.find('.invite-modal__submit-error')).toHaveLength(1);
    });

    it('should disable button when isLoading is passed', () => {
      const wrapper = shallow(
        <InviteModalApplication isLoading />,
      );

      expect(wrapper.find('Button').prop('disabled')).toBeTruthy();
    });

    it('should setFormItem correctly when called', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<InviteModalApplication onSubmit={onSubmit} />);
      wrapper.find('#email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#email.input-field__input').simulate('blur');

      wrapper.find('#confirm-email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#confirm-email.input-field__input').simulate('blur');

      wrapper.find('#name.input-field__input').simulate('change', {
        target: { value: 'abc' },
      });
      wrapper.find('#name.input-field__input').simulate('blur');

      wrapper.find('.invite-modal__form').simulate('submit');
      expect(onSubmit).toBeCalledWith({
        email: 'abc@123.com',
        name: 'abc',
      });
    });
  });

  describe('should not call onSubmit function if name is not valid', () => {
    it('should setFormItem correctly when called', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<InviteModalApplication onSubmit={onSubmit} />);
      wrapper.find('#email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#email.input-field__input').simulate('blur');

      wrapper.find('#confirm-email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#confirm-email.input-field__input').simulate('blur');

      wrapper.find('#name.input-field__input').simulate('change', {
        target: { value: 'ab' },
      });
      wrapper.find('#name.input-field__input').simulate('blur');

      wrapper.find('.invite-modal__form').simulate('submit');
      expect(onSubmit).not.toBeCalled();
    });
  });

  describe('should not call onSubmit function if email is not valid', () => {
    it('should setFormItem correctly when called', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<InviteModalApplication onSubmit={onSubmit} />);
      wrapper.find('#email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#email.input-field__input').simulate('blur');

      wrapper.find('#confirm-email.input-field__input').simulate('change', {
        target: { value: 'abc@12' },
      });
      wrapper.find('#confirm-email.input-field__input').simulate('blur');

      wrapper.find('#name.input-field__input').simulate('change', {
        target: { value: 'abc' },
      });
      wrapper.find('#name.input-field__input').simulate('blur');

      wrapper.find('.invite-modal__form').simulate('submit');
      expect(onSubmit).not.toBeCalled();
    });
  });

  describe('should not call onSubmit function if email is not match', () => {
    it('should setFormItem correctly when called', () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<InviteModalApplication onSubmit={onSubmit} />);
      wrapper.find('#email.input-field__input').simulate('change', {
        target: { value: 'abc@123.com' },
      });
      wrapper.find('#email.input-field__input').simulate('blur');

      wrapper.find('#confirm-email.input-field__input').simulate('change', {
        target: { value: 'abc@124.com' },
      });
      wrapper.find('#confirm-email.input-field__input').simulate('blur');

      wrapper.find('#name.input-field__input').simulate('change', {
        target: { value: 'abc' },
      });
      wrapper.find('#name.input-field__input').simulate('blur');

      wrapper.find('.invite-modal__form').simulate('submit');
      expect(onSubmit).not.toBeCalled();
    });
  });
});
