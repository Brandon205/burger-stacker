import React from 'react';

class BurgerStack extends React.Component {
  render() {
    let burgerPieces = this.props.value.map(piece => <div>{piece}</div> )
    return (
      <div>
        {burgerPieces}
        <button onClick={this.props.onClick}>Clear</button>
      </div>
    )
  }
}

export default BurgerStack;