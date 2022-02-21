import React from 'react'

export default function ButonContainer(props) {

    const { setRandomNumber } = props

    return(
        <button
            onClick={setRandomNumber}
        >Click me</button>
    )
}