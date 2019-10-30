import React from 'react';
import BurgerList from './BurgerList';
import BurgerStack from './BurgerStack';
import './App.css';

class App extends React.Component {
  state = {
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ],
    stack: [],
    name: '',
    color: ''
  }

  handleAddToStack = (e, ingred) => {
    e.preventDefault();
    let newStack = [...this.state.stack];
    newStack.unshift(this.state.ingredients[ingred]);
    this.setState({ stack: newStack });
  }

  handleUndoClick = () => {
    let newStack = [...this.state.stack];
    newStack.shift();
    this.setState({ stack: newStack });
  }

  handleClearStack = () => {
    this.setState({ stack: [] });
  }

  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitClick = () => {
    let ingredientsCopy = [...this.state.ingredients];
    ingredientsCopy.push({name: this.state.name, color: this.state.color});
    this.setState({ ingredients: ingredientsCopy });
  }

  render() {
    return (
      <div className='main-container'>
        <BurgerList ingredients={this.state.ingredients} onClick={this.handleAddToStack} onChange={this.handleChange} textVal={this.state.textVal} onSubmitClick={this.handleSubmitClick} />
        <BurgerStack value={this.state.stack} onClick={this.handleClearStack} onUndoClick={this.handleUndoClick} />
      </div>
    )
  }
}

export default App;
