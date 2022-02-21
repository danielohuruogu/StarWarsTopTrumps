import React from 'react'

export default function ButtonContainer(props) {

    const { setRandomNumbers } = props

    return(
        <button
            onClick={setRandomNumbers}
        >
            Click me
        </button>
    )
}