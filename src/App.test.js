import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2 style={{textAlign: 'center', margin: '0',paddingTop: '17px',backgroundColor: '#5ae45a'}}>Welcome to Game Center</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});