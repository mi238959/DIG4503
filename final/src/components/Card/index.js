import React from 'react'
import './index.css'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Card