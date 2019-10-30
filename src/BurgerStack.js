import React from 'react';

class BurgerStack extends React.Component {
  render() {
    let burgerPieces = this.props.value.map(piece => <div style={{backgroundColor: piece.color}}>{piece.name}</div> )
    return (
      <div className="stack" >
        <button className="undo" onClick={this.props.onUndoClick}>Undo</button>
        {burgerPieces}
        <button onClick={this.props.onClick} className="clear">Clear</button>
      </div>
    )
  }
}

export default BurgerStack;