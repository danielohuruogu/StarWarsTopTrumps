import React from 'react'
import Card from './Card.js'

export default function CardContainer(props) {

    const { cardInfo } = props

    console.log(cardInfo)

    return (
        <div>
            {  
                cardInfo && (
                <>
                    <Card info={cardInfo.firstPlayer} />
                    <Card info={cardInfo.secondPlayer} />
                </>
            )
            }
        </div>
    )
}

