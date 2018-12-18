import React from 'react';
import autoBind from 'react-autobind';
import { Well, Button, Modal } from 'react-bootstrap';


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
      showPopup: false,
      tictactoeSet: [{id: 11, value: ''},{id: 12, value: ''},{id: 13, value: ''},
                     {id: 21, value: ''},{id: 22, value: ''},{id: 23, value: ''},
                     {id: 31, value: ''},{id: 32, value: ''},{id: 33, value: ''}]
    }
    autoBind(this);
  }
  winCombination() {
    const currentSet = this.state.tictactoeSet;
    const winCombo1 = currentSet[0].value === currentSet[1].value && currentSet[1].value === currentSet[2].value;
    const winCombo2 = currentSet[0].value === currentSet[3].value && currentSet[3].value === currentSet[6].value;
    const winCombo3 = currentSet[0].value === currentSet[4].value && currentSet[4].value === currentSet[8].value;
    const winCombo4 = currentSet[4].value === currentSet[3].value && currentSet[3].value === currentSet[5].value;
    const winCombo5 = currentSet[4].value === currentSet[1].value && currentSet[1].value === currentSet[7].value;
    const winCombo6 = currentSet[4].value === currentSet[2].value && currentSet[2].value === currentSet[6].value;
    const winCombo7 = currentSet[8].value === currentSet[6].value && currentSet[6].value === currentSet[7].value;
    const winCombo8 = currentSet[8].value === currentSet[2].value && currentSet[2].value === currentSet[5].value;
    let winner = '';
    if((currentSet[0].value !== '' && (winCombo1 || winCombo2 || winCombo3))){
      winner = currentSet[0].value;
    }else if((currentSet[4].value !== '' && (winCombo4 || winCombo5 || winCombo6))){
      winner = currentSet[4].value;
    }else if((currentSet[8].value !== '' && (winCombo7 || winCombo8))){
      winner = currentSet[8].value;
    }else{
      const hasEmptyField = currentSet.find(function(object) {
        return object.value === ''
      })
      if(!hasEmptyField){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 0.5},
          player2: { ...this.state.player2, score: this.state.player2.score + 0.5},
          winner: 'Draw',
          gameOver: true,
          showPopup: true
        })
      }
      
    }
    if(winner === 'X'){
      this.setState({
        player1: { ...this.state.player1, score: this.state.player1.score + 1},
        winner: 'player 1 wins',
        gameOver: true,
        showPopup: true
      })
    }
    if(winner === 'O'){
      this.setState({
        player2: { ...this.state.player2, score: this.state.player2.score + 1},
        winner: 'player 2 wins',
        gameOver: true,
        showPopup: true
      })
    }
  }
  onUserClick(position) {
    if(this.state.gameOver === true){
      this.setState({showPopup: true})
    }else if(position.value !== ''){
    }else{
      let currentStateTictactoe = this.state.tictactoeSet;
      const searchForPosition = this.state.tictactoeSet.map(function(x) {return x.id; }).indexOf(position.id);
      currentStateTictactoe[searchForPosition].value = this.state.player1.turn ? this.state.player1.type : this.state.player2.type;  
      this.setState({
        player1: {...this.state.player1, turn: this.state.player2.turn},
        player2: {...this.state.player2, turn: this.state.player1.turn},
        tictactoeSet: [...currentStateTictactoe]
      }, this.winCombination);
    }
  }

  findArrayElementById(id) {
    return this.state.tictactoeSet.find((element) => {
      return element.id === id;
    })
  }

  resetBoard() {
    let player1 = {
      ...this.state.player1,
      turn: this.state.player2.initTurn,
      initTurn: this.state.player2.initTurn,
    };
    let player2 = {
      ...this.state.player2,
      turn: this.state.player1.initTurn,
      initTurn: this.state.player1.initTurn,
    }    
    this.setState({
      player1: player1,
      player2: player2,
      tictactoeSet: [...this.clearBoard()],
      gameOver: false
    })
  }
  clearBoard(){
    let tempTictactoeSet = this.state.tictactoeSet;

    tempTictactoeSet.map(function(x) { 
      x.value = ''; 
      return x
    });

    return tempTictactoeSet;
  }
  resetGame(){
    this.setState({
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
      tictactoeSet: [...this.clearBoard()]
    })
  }
  removeModel(){
    this.setState({showPopup: false})
  }
  renderModel(){
    return(<Modal show={this.state.showPopup} bsSize='small' style={{marginTop: '180px', cursor: 'pointer',textAlign: 'center'}} aria-labelledby='contained-modal-title-sm'>
              <Modal.Header  id="contained-modal-title-sm" onClick={this.removeModel}>
                <Modal.Title>{this.state.winner} this round</Modal.Title>
              </Modal.Header>
              <Modal.Body onClick={this.removeModel}>
                <h5>Player 1 vs Player 2</h5>
                <h4>{this.state.player1.score} - {this.state.player2.score}</h4>
              </Modal.Body>
            </Modal>)
  }
  renderWellField(fieldLocation, styleOfField){
    return (<Well style={{...styleOfField, cursor: 'pointer',width:'100px', height:'100px', marginBottom: '0',textAlign: 'center', fontSize: '40px'}} onClick={this.onUserClick.bind(this,this.findArrayElementById(fieldLocation))}>
              {this.findArrayElementById(fieldLocation).value}
            </Well>)
  }

  renderButtonField(onClickFuc, buttonName) {
    return <Button bsSize="small" style={{  marginTop: '10px', marginLeft: '5px'}} bsStyle="danger" onClick={onClickFuc}>{buttonName}</Button>
  }

  render() {
    return (
      <div className="TICTACTOE" style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>
        {this.renderModel()}
        <div style={{marginTop: '17px', marginLeft: '74px'}}><span style={{color: '#00ff51', borderBottom: this.state.player1.turn ? '5px solid #37e937' : ''}}> Player 1(X)</span> <span style={{color: 'red'}}>vs</span> <span style={{color: '#00ff51',borderBottom: this.state.player2.turn ? '5px solid #37e937' : ''}}>Player 2(O)</span></div>
        {this.renderWellField(11,{ marginTop: '17px', float: 'left'} )}
        {this.renderWellField(12,{ marginTop: '17px', marginLeft: '1px', float: 'left'} )}
        {this.renderWellField(13,{ marginTop: '17px', marginLeft: '202px'} )}
        {this.renderWellField(21,{ marginTop: '1px', float: 'left' } )}
        {this.renderWellField(22,{ marginTop: '1px', marginLeft: '1px', float: 'left'} )}
        {this.renderWellField(23,{ marginTop: '1px', marginLeft: '202px'} )}
        {this.renderWellField(31,{ marginTop: '1px', float: 'left' } )}
        {this.renderWellField(32,{ marginTop: '1px', marginLeft: '1px', float: 'left'} )}
        {this.renderWellField(33,{ marginTop: '1px', marginLeft: '202px'} )}
        <div style={{color: '#00ff51',marginTop: '2px', float: 'left'}}>
          Player 1: {this.state.player1.score} <br />
          Player 2: {this.state.player2.score} 
        </div>
        {this.renderButtonField(this.resetGame, 'Restart the game')}
        {this.renderButtonField(this.resetBoard, 'Reset the board')}
      </div>
    );
  }
}
