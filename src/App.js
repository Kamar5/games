import React from 'react';
import TicTacToe from './components/TicTacToe';
import { Tabs, Tab } from 'react-bootstrap';
export default function App(){
  return (
    <div>
      <h2 style={{textAlign: 'center', margin: '0',paddingTop: '17px',backgroundColor: '#5ae45a'}}>Welcome to Game Center</h2>    
      <Tabs defaultActiveKey={'tictactoe'} animation={false} id='gameCenter' style={{backgroundColor: '#5ae45a'}}> 
        <Tab eventKey={'tictactoe'} title="TicTacToe" style={{marginLeft: '5px'}}>
          <TicTacToe />
        </Tab>
        <Tab eventKey={'checkers'} title="Checkers" style={{textAlign: 'center',backgroundColor: '#49add1'}}>
          Comming Soon!
        </Tab>
        <Tab eventKey={'chess'} title="Chess" style={{textAlign: 'center',backgroundColor: '#49add1'}}>
          Comming Soon!
        </Tab>
      </Tabs>
    </div>
  );
}