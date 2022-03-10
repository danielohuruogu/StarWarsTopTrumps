import react from 'react'
import { useEffect, useState } from 'react';


export default function Scoreboard(props) {

    const { resultState, scores, winnerState, resetGame } = props


    
    return (
        <div>
            <div>{scores['Player One']}</div><div>{scores['Player Two']}</div>
            <p>{resultState}</p>
            <p>{winnerState}</p>
            <button
                onClick={resetGame}
            >
                Restart
            </button>
        </div>

    )
}