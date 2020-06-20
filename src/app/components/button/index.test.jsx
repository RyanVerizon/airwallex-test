import React from 'react';
import { shallow } from 'enzyme';
import Button from '~components/button';

const defaultProps = {};

describe('<Button />', () => {
  describe('Render', () => {
    it('should render Button', () => {
      const wrapper = shallow(<Button />);

      expect(wrapper.find('.button')).toHaveLength(1);
    });

    it('should have same label with children when children is not null', () => {
      const wrapper = shallow(<Button>test</Button>);

      expect(wrapper.text()).toEqual('test');
    });

    it('should have secondary label with passing through secondary prop', () => {
      const props = { ...defaultProps, secondary: true };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.find('.button--secondary')).toHaveLength(1);
    });

    it('should add custom-classname when passing through className prop', () => {
      const props = { ...defaultProps, className: 'custom-classname' };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.find('.custom-classname')).toHaveLength(1);
    });

    it('should have button as type submit when htmltype is submit', () => {
      const props = { ...defaultProps, htmlType: 'submit' };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it('should have button to disabled when passing through disabled prop', () => {
      const props = { ...defaultProps, disabled: true };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.find('button').prop('disabled')).toEqual(true);
    });

    it('should trigger callback function when it is clicked', () => {
      const mockClickHandler = jest.fn();
      const props = { ...defaultProps, onClick: mockClickHandler };
      const wrapper = shallow(<Button {...props} />);
      wrapper.simulate('click');
      expect(mockClickHandler.mock.calls).toHaveLength(1);
    });
  });
});
