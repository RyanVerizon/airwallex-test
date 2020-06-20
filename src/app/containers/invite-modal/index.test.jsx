import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { mount, shallow } from 'enzyme';
import InviteModal from '~containers/invite-modal';

jest.mock('axios');

describe('<InviteModalApplication />', () => {
  describe('Render', () => {
    it('should render default form', () => {
      const wrapper = shallow(<InviteModal />);
      expect(wrapper.find('InviteModalApplication')).toHaveLength(1);
    });

    it('should render success modal if registered successfully', () => {
      axios.post.mockResolvedValue({
        data: 'registered',
      });

      const wrapper = mount(<InviteModal />);

      act(() => {
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
      });
      setTimeout(() => {
        expect(wrapper.find('.invite-modal__success')).toHaveLength(1);
      });
    });

    it('should have error message if register failed', () => {
      axios.post.mockRejectedValue({
        data: {
          erroMessage: 'Failed to register',
        },
      });

      const wrapper = mount(<InviteModal />);

      act(() => {
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
      });

      setTimeout(() => {
        expect(wrapper.find('.invite-modal__success')).toHaveLength(1);
      });
    });
  });
});
