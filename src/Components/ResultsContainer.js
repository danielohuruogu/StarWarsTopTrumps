import react from 'react'
import { useEffect, useState } from 'react';


export default function ResultsContainer(props) {

    const { gameState, players, resultState, setResultState } = props


    useEffect(()=>{
        // will change the above variable depending on the data within the depen array
        // check if there are attributes from each selected - if their values are no longer 0
        if ( players[0].attriValue !== null && players[1].attriValue !== null )
        {
        // then check if they're the same attribute - have to compare height for height, not height for age
            if ( players[0].attri === players[1].attri )
            {
                if ( players[0].attriValue > players[1].attriValue )
                {
                    setResultState("PLAYER ONE WINS")
                } else if ( players[0].attriValue < players[1].attriValue )
                {
                    setResultState("PLAYER TWO WINS")
                } else {
                    setResultState("DRAW")
                }
            } else {
                setResultState("Different attributes selected - draw again")
            }
        }
    }, [players])

    function resetGame() {

    }
    
    return (
        <div>
            <p>{resultState}</p>
            <button
                onClick={resetGame}
            >
                Restart
            </button>
        </div>

    )
}