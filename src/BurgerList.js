import React from 'react';

class BurgerList extends React.Component {
  render() {
    let allIngredients = this.props.ingredients.map(ingredient => {
      // console.log(ingredient);
      return (
        <div className="list-component">
          <div className="list">{ingredient.name}</div>
          <button name={ingredient.name} colour={ingredient.color} onClick={this.props.onClick} >></button>
        </div>
      )
    })
    return (
      <div>
        {allIngredients}
        <input type="text" name="name" onChange={this.props.onChange} value={this.props.textVal} placeholder="Name" />
        <input type="text" name="color" onChange={this.props.onChange} value={this.props.textVal} placeholder="Color" />
        <button onClick={this.props.onSubmitClick}>Add to list</button>
      </div>
    )
  }
}

export default BurgerList;