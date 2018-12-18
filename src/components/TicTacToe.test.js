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

it('should remove the modal when user invoke removeModel func', () => {
  const wrapper = mount(<TicTacToe />);
  wrapper.setState({ showPopup: true });
  wrapper.instance().removeModel();
  expect(wrapper.state().showPopup).toEqual(false);
});

it('should set to X in first field in board when player1 clicks', () =>{
  const wrapper = mount(<TicTacToe />);
  wrapper.find(Well).at(0).simulate('click');

  expect(wrapper.state().player1.turn).toEqual(false);
  expect(wrapper.state().player2.turn).toEqual(true);
  expect(wrapper.state().tictactoeSet[0].value).toEqual('X')

})

it('should show the popup when the game is over and user clicks on any field on board', () =>{
  const wrapper = mount(<TicTacToe />);
  wrapper.setState({gameOver: true});
  wrapper.find(Well).at(0).simulate('click');

  expect(wrapper.state().showPopup).toEqual(true);

})

it('should be draw when there is no empty field and no winner', () =>{
  const wrapper = mount(<TicTacToe />);
  
  wrapper.setState({tictactoeSet: [{id: 11, value: 'O'},{id: 12, value: 'O'},{id: 13, value: 'X'},
  {id: 21, value: 'X'},{id: 22, value: 'X'},{id: 23, value: 'O'},
  {id: 31, value: 'O'},{id: 32, value: 'X'},{id: 33, value: 'O'}]});

  wrapper.instance().winCombination();
  expect(wrapper.state().winner).toEqual('Draw');
  expect(wrapper.state().player1.score).toEqual(0.5);
  expect(wrapper.state().player2.score).toEqual(0.5);
  expect(wrapper.state().gameOver).toEqual(true);
  expect(wrapper.state().showPopup).toEqual(true);
})


it('should have 1 point when it has 3 X in row player 1', () => {
  const wrapper = mount(<TicTacToe />);
  wrapper.find(Well).at(0).simulate('click');
  wrapper.find(Well).at(3).simulate('click');
  wrapper.find(Well).at(1).simulate('click');
  wrapper.find(Well).at(4).simulate('click');
  wrapper.find(Well).at(2).simulate('click');

  expect(wrapper.state().winner).toEqual('player 1 wins');
  expect(wrapper.state().player1.score).toEqual(1);
  expect(wrapper.state().player2.score).toEqual(0);
  expect(wrapper.state().gameOver).toEqual(true);
  expect(wrapper.state().showPopup).toEqual(true);
})

it('should have 1 point when it has 3 X in row player 2', () => {
  const wrapper = mount(<TicTacToe />);
  wrapper.find(Well).at(3).simulate('click');
  wrapper.find(Well).at(0).simulate('click');
  wrapper.find(Well).at(6).simulate('click');
  wrapper.find(Well).at(1).simulate('click');
  wrapper.find(Well).at(4).simulate('click');
  wrapper.find(Well).at(2).simulate('click');
  
  expect(wrapper.state().winner).toEqual('player 2 wins');
  expect(wrapper.state().player1.score).toEqual(0);
  expect(wrapper.state().player2.score).toEqual(1);
  expect(wrapper.state().gameOver).toEqual(true);
  expect(wrapper.state().showPopup).toEqual(true);
})