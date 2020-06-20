import React from 'react';
import { shallow } from 'enzyme';
import PageHome from '~pages/home';

describe('<Home />', () => {
  describe('Render', () => {
    it('should render Home', () => {
      const wrapper = shallow(<PageHome />);
      expect(wrapper.find('.home')).toHaveLength(1);
      expect(wrapper.find('.home__title')).toHaveLength(1);
      expect(wrapper.find('.home__summary')).toHaveLength(1);
      expect(wrapper.find('InviteModal')).toHaveLength(0);
    });

    it('should have InviteModal when request an invite button clicked', () => {
      const wrapper = shallow(<PageHome />);
      wrapper.find('Button').simulate('click');
      expect(wrapper.find('InviteModal')).toHaveLength(1);
    });
  });
});
