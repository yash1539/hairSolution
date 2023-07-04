import React from 'react'
import './Card.css'

const Card = ({text}) => {
  return (
    <div className='card'>
        <div>
            <img src="./assets/girl.svg" alt="tia" />
        </div>
        <div className='card_text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card
