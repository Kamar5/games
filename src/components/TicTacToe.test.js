import React from 'react';
import { shallow, mount } from 'enzyme';
import TicTacToe from './TicTacToe';
import { Well, Button } from 'react-bootstrap';

it('should render with well and button compoents', () => {
  const wrapper = shallow(<TicTacToe />);
  expect(wrapper.find(Well).length).toEqual(9);
  expect(wrapper.find(Button).length).toEqual(2);
});

it('should reset to defualt values when click restart button', () => {
    const wrapper = mount(<TicTacToe />);

    wrapper.find(Button).at(0).simulate('click');
    expect(wrapper.state().player1.turn).toEqual(true);
    expect(wrapper.state().player2.turn).toEqual(false);
});

it('should reset to board values when click reset board button', () => {
  const wrapper = mount(<TicTacToe />);

  wrapper.find(Button).at(1).simulate('click');
  expect(wrapper.state().player1.turn).toEqual(false);
  expect(wrapper.state().player2.turn).toEqual(true);
});