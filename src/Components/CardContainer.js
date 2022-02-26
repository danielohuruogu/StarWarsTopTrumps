import React, { useEffect } from 'react'
import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer(props) {

    const { cardInfo, setRandomNumbers } = props

    console.log(cardInfo)

    const [ attributes, setAttributes ] = useState({
        one: 0,
        two: 0,
    })

    useEffect(()=>{
        console.log(attributes)
    }, [attributes])

    function compareAttributes(){
        console.log(attributes)
    // compare selected attributes
    // if (1 is bigger than the other) {
    //     console log that that card is the winner
    // }
    }

    return (
        <div>
            {  
                cardInfo && (
                <div className='cardContainer'>
                    <Card
                        name="one"
                        info={cardInfo.firstPlayer}
                        setAttributes={setAttributes}
                        />
                    <button
                        onClick={setRandomNumbers}
                    >
                        Draw your characters
                    </button>
                    <Card
                        name="two"
                        info={cardInfo.secondPlayer}
                        setAttributes={setAttributes}
                        />
                </div>
            )
            }
        </div>
    )
}

