import React from 'react';

class BurgerStack extends React.Component {
  render() {
    let burgerPieces = this.props.value.map((piece, id) => <div style={{backgroundColor: piece.color}} key={id} >{piece.name}</div> )
    return (
      <div className="stack" >
        <button className="undo" onClick={this.props.onUndoClick}>Undo</button>
        <div>{burgerPieces}</div>
        <button onClick={this.props.onClick} className="clear">Clear</button>
      </div>
    )
  }
}

export default BurgerStack;