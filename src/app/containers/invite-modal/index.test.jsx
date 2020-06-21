import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import { mount, shallow } from 'enzyme';
import InviteModal from '~containers/invite-modal';

jest.mock('axios');

describe('<InviteModalApplication />', () => {
  describe('Render', () => {
    it('should render default form', () => {
      const wrapper = shallow(<InviteModal onClose={() => {}} />);
      expect(wrapper.find('InviteModalApplication')).toHaveLength(1);
    });

    it('should render success modal if registered successfully', async () => {
      axios.post.mockResolvedValue({
        data: 'registered',
      });

      const wrapper = mount(<InviteModal onClose={() => {}} />);
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

      await act(async () => {
        wrapper.find('.invite-modal__form').simulate('submit');
        // Hacky method as it takes a promise to update state
        await new Promise((r) => setTimeout(r, 300));
        wrapper.update();
      });

      expect(wrapper.find('.invite-modal__success')).toHaveLength(1);
    });

    it('should have error message if register failed', async () => {
      axios.post.mockRejectedValue({
        response: {
          data: {
            errorMessage: 'Failed to register',
          },
        },
      });

      const wrapper = mount(<InviteModal onClose={() => {}} />);
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
      await act(async () => {
        wrapper.find('.invite-modal__form').simulate('submit');
        // Hacky method as it takes a promise to update state
        await new Promise((r) => setTimeout(r, 300));
        wrapper.update();
      });
      expect(wrapper.find('.invite-modal__success')).toHaveLength(0);
      expect(wrapper.find('.invite-modal__submit-error')).toHaveLength(1);
      expect(wrapper.find('.invite-modal__submit-error').text()).toEqual('Failed to register');
    });
  });
});
