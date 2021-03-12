import React, { Component } from 'react'
import Section from '../Section'
import './RecipeView.css';

import RecipeCard from './RecipeCard'

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {},
    }
  }


  addCard = () => {
    // Keys should be unique, for this purpose date.now() is fine
    const key = Date.now();
    let cardsCopy = this.state.cards
    cardsCopy[key] = {
      name: 'new card',
      foods: [],
    }
    console.log("Adding RecipeCard: ", key)
    this.setState({ cards: cardsCopy })
  }

  updateCardName = (newName, cardKey) => {
    console.log("Changing Card[" + cardKey + "] name to: " + newName)
    let cardsCopy = this.state.cards
    cardsCopy[cardKey].name = newName
    this.setState({cards: cardsCopy})
  }

  render = () => {
    return (
      <>
        <button onClick={() => console.log(this.state)}>RecipeView State</button>
        <Section className="RecipeView" name="Recipes" add={this.addCard}>
          {Object.keys(this.state.cards).length > 0 ?
            Object.keys(this.state.cards).map(cardKey => {
              return <RecipeCard
                name={this.state.cards[cardKey].name}
                foods={this.state.cards[cardKey].foods}
                updateName={newName => this.updateCardName(newName, cardKey)}
                key={cardKey}
              />
            })
            : null}
        </Section>
      </>
    )
  }

}

export default RecipeView;
