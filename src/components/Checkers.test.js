import React from 'react';
import { shallow } from 'enzyme';
import Checkers from './Checkers';

it('should render checkers', () => {
  const wrapper = shallow(<Checkers />);
});