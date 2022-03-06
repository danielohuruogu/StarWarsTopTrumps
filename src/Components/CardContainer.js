import React, { useEffect, useState } from 'react'
import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer(props) {

    const { cardInfo, setRandomNumbers, compareAttributes, players } = props

    return (
            <div className='cardContainer'>
                <Card
                    name="one"
                    info={cardInfo && cardInfo.firstPlayer}
                    attributes={players[0]}
                    compareAttri={compareAttributes}
                    />
                <button className='drawBtn'
                    onClick={setRandomNumbers}
                >
                    Draw your characters
                </button>
                <Card
                    name="two"
                    info={cardInfo && cardInfo.secondPlayer}
                    attributes={players[1]}
                    compareAttri={compareAttributes}
                    />
            </div>
    )
}

