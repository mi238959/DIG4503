import React from 'react'
import Card from '../Card/index.js'
import '../Card/index.css'
import cardData from './data.json'

class CardList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      cardData: cardData.cards
    }
  }


  render () {
    return (
      <>
        {this.state.cardData
        .map((v) => <Card key={v.title} 
          title={v.title} 
          content={v.content}
          cardData={this.state.cardData}
          
        /> )}
       </>
    )
  }

}

export default CardList