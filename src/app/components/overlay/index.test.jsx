import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '~components/overlay';

describe('<Overlay />', () => {
  describe('Render', () => {
    it('should render Overlay', () => {
      const wrapper = shallow(<Overlay />);
      expect(wrapper.find('.overlay')).toHaveLength(1);
    });
  });
});
