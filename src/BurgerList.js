import React from 'react';

class BurgerList extends React.Component {
  render() {
    let allIngredients = this.props.ingredients.map(ingredient => <div><div>{ingredient.name}</div> <button onClick={this.props.onClick} name={ingredient.name} >></button> </div>)
    return (
      <div>
        {allIngredients}
      </div>
    )
  }
}

export default BurgerList;