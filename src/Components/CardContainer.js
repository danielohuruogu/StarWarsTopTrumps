import React from 'react'

export default function CardContainer(props) {

    const { cardInfo } = props

    return (
        <div>
            <Card info={cardInfo[0]}/>
            <Card info={cardInfo[1]} />
        </div>
    )
}

