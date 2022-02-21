import React from 'react'
import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer(props) {

    const { cardInfo } = props

    console.log(cardInfo)

    return (
        <div>
            {  
                cardInfo && (
                <div className='cardContainer'>
                    <Card info={cardInfo.firstPlayer} />
                    <Card info={cardInfo.secondPlayer} />
                </div>
            )
            }
        </div>
    )
}

