import React from 'react';
import autoBind from 'react-autobind';
import { Well, Button } from 'react-bootstrap';


export default class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player1: {
        score: 0,
        turn: true,
        type: 'X',
        initTurn: true
      },
      player2: {
        score: 0,
        turn: false,
        type: 'O',
        initTurn: false
      },
      winner: '',
      gameOver: false,
      tictactoeSet: [{id: 11, value: ''},{id: 12, value: ''},{id: 13, value: ''},
                     {id: 21, value: ''},{id: 22, value: ''},{id: 23, value: ''},
                     {id: 31, value: ''},{id: 32, value: ''},{id: 33, value: ''}]
    }
    autoBind(this);
  }
  winCombination() {
    const winCombo1 = this.state.tictactoeSet[0].value === this.state.tictactoeSet[1].value && this.state.tictactoeSet[1].value === this.state.tictactoeSet[2].value;
    const winCombo2 = this.state.tictactoeSet[0].value === this.state.tictactoeSet[3].value && this.state.tictactoeSet[3].value === this.state.tictactoeSet[6].value;
    const winCombo3 = this.state.tictactoeSet[0].value === this.state.tictactoeSet[4].value && this.state.tictactoeSet[4].value === this.state.tictactoeSet[8].value;
    const winCombo4 = this.state.tictactoeSet[4].value === this.state.tictactoeSet[3].value && this.state.tictactoeSet[3].value === this.state.tictactoeSet[5].value;
    const winCombo5 = this.state.tictactoeSet[4].value === this.state.tictactoeSet[1].value && this.state.tictactoeSet[1].value === this.state.tictactoeSet[7].value;
    const winCombo6 = this.state.tictactoeSet[4].value === this.state.tictactoeSet[2].value && this.state.tictactoeSet[2].value === this.state.tictactoeSet[6].value;
    const winCombo7 = this.state.tictactoeSet[8].value === this.state.tictactoeSet[6].value && this.state.tictactoeSet[6].value === this.state.tictactoeSet[7].value;
    const winCombo8 = this.state.tictactoeSet[8].value === this.state.tictactoeSet[2].value && this.state.tictactoeSet[2].value === this.state.tictactoeSet[5].value;
    if((this.state.tictactoeSet[0].value !== '' && (winCombo1 || winCombo2 || winCombo3))){
      if(this.state.tictactoeSet[0].value === 'X'){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 1},
          winner: 'player 1 wins',
          gameOver: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true
        })
      }

      return true;
    }else if((this.state.tictactoeSet[4].value !== '' && (winCombo4 || winCombo5 || winCombo6))){
      if(this.state.tictactoeSet[4].value === 'X'){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 1},
          winner: 'player 1 wins',
          gameOver: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true
        })
      }

      return true;
    }else if((this.state.tictactoeSet[8].value !== '' && (winCombo7 || winCombo8))){
      if(this.state.tictactoeSet[8].value === 'X'){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 1},
          winner: 'player 1 wins',
          gameOver: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true
        })
      }

      return true;
    }else{
      return false
    }
  }
  onUserClick(position) {
    if(this.state.gameOver === true){
      alert('Game is over');
    }else if(position.value !== ''){
      alert('you already entered');
    }else{
      let currentStateTictactoe = this.state.tictactoeSet;
      const searhForPosition = this.state.tictactoeSet.map(function(x) {return x.id; }).indexOf(position.id);
      if(this.state.player1.turn){
        currentStateTictactoe[searhForPosition].value = this.state.player1.type;
        let player1 = this.state.player1;
        let player2 = this.state.player2;
        player1.turn = false;
        player2.turn = true;
        this.setState({
          player1: player1,
          player2: player2,
          tictactoeSet: [...currentStateTictactoe]
        }, () => this.winCombination());
      }else{
        currentStateTictactoe[searhForPosition].value = this.state.player2.type;
        let player1 = this.state.player1;
        let player2 = this.state.player2;
        player1.turn = true;
        player2.turn = false;
        this.setState({
          player1: player1,
          player2: player2,
          tictactoeSet: [...currentStateTictactoe]
        }, () => this.winCombination());
      }     
    }
  }

  findArrayElementById(id) {
    return this.state.tictactoeSet.find((element) => {
      return element.id === id;
    })
  }

  resetBoard() {
    let tempTictactoeSet = this.state.tictactoeSet;

    tempTictactoeSet.map(function(x) { 
      x.value = ''; 
      return x
    });

    let player1;
    let player2 = this.state.player2;
    if(this.state.player1.initTurn){
      player2 = {
        ...this.state.player2,
        turn: true,
        initTurn: true,
      }
      player1 = {
        ...this.state.player1,
        turn: false,
        initTurn: false,
      }      
    }else{
      player1 = {
        ...this.state.player1,
        turn: true,
        initTurn: true,
      }
      player2 = {
        ...this.state.player2,
        turn: false,
        initTurn: false,
      }
    }
    
    this.setState({
      player1: player1,
      player2: player2,
      tictactoeSet: [...tempTictactoeSet],
      gameOver: false
    })
  }
  render() {
    return (
      <div className="TICTACTOE" style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>
        <div style={{marginTop: '17px', marginLeft: '94px'}}><span style={{color: '#00ff51', borderBottom: this.state.player1.turn ? '5px solid #37e937' : ''}}> Player 1(X)</span> <span style={{color: 'red'}}>vs</span> <span style={{color: '#00ff51',borderBottom: this.state.player2.turn ? '5px solid #37e937' : ''}}>Player 2(O)</span></div>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '17px', marginLeft: '17px', float: 'left', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(11))}>
          {this.findArrayElementById(11).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '17px', marginLeft: '1px', float: 'left', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(12))}>
          {this.findArrayElementById(12).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '17px', marginLeft: '220px', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(13))}>
          {this.findArrayElementById(13).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '17px', float: 'left', textAlign: 'center', fontSize: '40px' }} onClick={this.onUserClick.bind(this,this.findArrayElementById(21))}>
          {this.findArrayElementById(21).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '1px', float: 'left', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(22))}>
          {this.findArrayElementById(22).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '220px', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(23))}>
          {this.findArrayElementById(23).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '17px', float: 'left', textAlign: 'center', fontSize: '40px' }} onClick={this.onUserClick.bind(this,this.findArrayElementById(31))}>
          {this.findArrayElementById(31).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '1px', float: 'left', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(32))}>
          {this.findArrayElementById(32).value}
        </Well>
        <Well style={{cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0', marginTop: '1px', marginLeft: '220px', textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(33))}>
          {this.findArrayElementById(33).value}
        </Well>
        <div style={{color: '#00ff51',marginTop: '10px', marginLeft: '17px', float: 'left'}}>
          Player 1: {this.state.player1.score} 
        </div>
        <div style={{color: '#00ff51', marginTop: '10px', marginLeft: '17px', float: 'left'}}>
          Player 2: {this.state.player2.score}           
        </div>
        <Button style={{  marginTop: '6px', marginLeft: '17px'}} bsStyle="danger" onClick={this.resetBoard}>Reset Board</Button>
      </div>
    );
  }
}
