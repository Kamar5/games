import React from 'react';
import autoBind from 'react-autobind';
import { Well } from 'react-bootstrap';
import './Checkers.css';

export default class Checkers extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      checkerPieces: [{id: 'A1', value: 'player1Piece'},{id: 'C1', value: 'player1Piece'},{id: 'E1', value: 'player1Piece'},{id: 'G1', value: 'player1Piece'},
                  {id: 'B2', value: 'player1Piece'},{id: 'D2', value: 'player1Piece'},{id: 'F2', value: 'player1Piece'},{id: 'H2', value: 'player1Piece'},
                  {id: 'A3', value: 'player1Piece'},{id: 'C3', value: 'player1Piece'},{id: 'E3', value: 'player1Piece'},{id: 'G3', value: 'player1Piece'},
                  {id: 'B4', value: ''},{id: 'D4', value: ''},{id: 'F4', value: ''},{id: 'H4', value: ''},
                  {id: 'A5', value: ''},{id: 'C5', value: ''},{id: 'E5', value: ''},{id: 'G5', value: ''},
                  {id: 'B6', value: 'player2Piece'},{id: 'D6', value: 'player2Piece'},{id: 'F6', value: 'player2Piece'},{id: 'H6', value: 'player2Piece'},
                  {id: 'A7', value: 'player2Piece'},{id: 'C7', value: 'player2Piece'},{id: 'E7', value: 'player2Piece'},{id: 'G7', value: 'player2Piece'},
                  {id: 'B8', value: 'player2Piece'},{id: 'D8', value: 'player2Piece'},{id: 'F8', value: 'player2Piece'},{id: 'H8', value: 'player2Piece'}],
      player1: []
    }
    autoBind(this);
  }
  renderCheckersWell(){
    return(<Well></Well>)
  }
  renderCheckersWellMain(checkerPieces){
    return(<Well className='checkersWellMain'>
      <span className='checkersId'>{checkerPieces.id}</span>
      <span className={checkerPieces.value}></span>
    </Well>)
  }
  render(){
    return (
      <div className='checkers' style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>
        <div style={{width: '360px', marginTop: '17px'}}>
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[28])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[29])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[30])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[31])}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWellMain(this.state.checkerPieces[24])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[25])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[26])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[27])}{this.renderCheckersWell()}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[20])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[21])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[22])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[23])}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWellMain(this.state.checkerPieces[16])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[17])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[18])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[19])}{this.renderCheckersWell()}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[12])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[13])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[14])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[15])}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWellMain(this.state.checkerPieces[8])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[9])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[10])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[11])}{this.renderCheckersWell()}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[4])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[5])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[6])}
          {this.renderCheckersWell()}{this.renderCheckersWellMain(this.state.checkerPieces[7])}
        </div>
        <div style={{width: '360px'}}>
          {this.renderCheckersWellMain(this.state.checkerPieces[0])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[1])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[2])}{this.renderCheckersWell()}
          {this.renderCheckersWellMain(this.state.checkerPieces[3])}{this.renderCheckersWell()}
        </div>         
      </div>
    );
  }
  
}
