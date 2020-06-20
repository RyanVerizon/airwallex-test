import React from 'react';
import { shallow } from 'enzyme';
import Header from '~components/header';

describe('<Header />', () => {
  describe('Render', () => {
    it('should render Header', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.header')).toHaveLength(1);
    });
  });
});
