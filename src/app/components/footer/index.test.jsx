import React from 'react';
import { shallow } from 'enzyme';
import Footer from '~components/footer';

describe('<Footer />', () => {
  describe('Render', () => {
    it('should render Footer', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('.footer')).toHaveLength(1);
    });
  });
});
