import React from 'react';

class BurgerList extends React.Component {
  render() {
    let allIngredients = this.props.ingredients.map((ingredient, id) => <div className="list-component"  key={id}><p className="list">{ingredient.name}</p> <button onClick={(e) => this.props.onClick(e, id)}>></button></div>)
    return (
      <div className="fullList">
        {allIngredients}
        <input type="text" name="name" onChange={this.props.onChange} value={this.props.textVal} placeholder="Name" />
        <input type="text" name="color" onChange={this.props.onChange} value={this.props.textVal} placeholder="Color" />
        <button onClick={this.props.onSubmitClick}>Add to list</button>
      </div>
    )
  }
}

export default BurgerList;