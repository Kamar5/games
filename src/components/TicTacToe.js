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
          gameOver: true,
          showPopup: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true,
          showPopup: true
        })
      }

      return true;
    }else if((this.state.tictactoeSet[4].value !== '' && (winCombo4 || winCombo5 || winCombo6))){
      if(this.state.tictactoeSet[4].value === 'X'){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 1},
          winner: 'player 1 wins',
          gameOver: true,
          showPopup: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true,
          showPopup: true
        })
      }

      return true;
    }else if((this.state.tictactoeSet[8].value !== '' && (winCombo7 || winCombo8))){
      if(this.state.tictactoeSet[8].value === 'X'){
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 1},
          winner: 'player 1 wins',
          gameOver: true,
          showPopup: true
        })
      }else{
        this.setState({
          player2: { ...this.state.player2, score: this.state.player2.score + 1},
          winner: 'player 2 wins',
          gameOver: true,
          showPopup: true
        })
      }

      return true;
    }else{
      const hasEmptyField = this.state.tictactoeSet.find(function(object) {
        return object.value === ''
      })
      if(hasEmptyField){
        return false
      }else{
        this.setState({
          player1: { ...this.state.player1, score: this.state.player1.score + 0.5},
          player2: { ...this.state.player2, score: this.state.player2.score + 0.5},
          winner: 'Draw',
          gameOver: true,
          showPopup: true
        })
      }
      
    }
  }
  onUserClick(position) {
    if(this.state.gameOver === true){
      this.setState({showPopup: true})
    }else if(position.value !== ''){
    }else{
      let currentStateTictactoe = this.state.tictactoeSet;
      let player1 = this.state.player1;
      let player2 = this.state.player2;
      const searchForPosition = this.state.tictactoeSet.map(function(x) {return x.id; }).indexOf(position.id);
      if(this.state.player1.turn){
        currentStateTictactoe[searchForPosition].value = player1.type;
        player1.turn = false;
        player2.turn = true;
      }else{
        currentStateTictactoe[searchForPosition].value = player2.type;
        player1.turn = true;
        player2.turn = false;
      }     
      this.setState({
        player1: player1,
        player2: player2,
        tictactoeSet: [...currentStateTictactoe]
      }, () => this.winCombination());
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
  resetGame(){
    let tempTictactoeSet = this.state.tictactoeSet;

    tempTictactoeSet.map(function(x) { 
      x.value = ''; 
      return x
    });
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
      tictactoeSet: tempTictactoeSet
    })
  }

  renderModel(){
    return(<Modal show={this.state.showPopup} bsSize='small' style={{marginTop: '180px', cursor: 'pointer'}} aria-labelledby='contained-modal-title-sm'>
              <Modal.Header  id="contained-modal-title-sm" onClick={() => { this.setState({showPopup: false})}}>
                <Modal.Title> <h3 style={{textAlign: 'center'}}>{this.state.winner} this round</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body onClick={() => { this.setState({showPopup: false})}}>
                <h5 style={{textAlign: 'center'}}>Player 1 vs Player 2</h5>
                <h4 style={{textAlign: 'center'}}>{this.state.player1.score} - {this.state.player2.score}</h4>
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
