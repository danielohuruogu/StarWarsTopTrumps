import React from 'react'
import './ButtonContainer.css';

export default function ButtonContainer(props) {

    const { setRandomNumbers } = props

    return(
        <button className='button'
            onClick={setRandomNumbers}
        >
            Draw your characters
        </button>
    )
}