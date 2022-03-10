import react from 'react'
import { useEffect, useState } from 'react';


export default function Scoreboard(props) {

    const { players, resultState, setResultState, scores, setScore} = props


    // const [winnerState, setWinnerState] = useState("")


    // useEffect(() => {
    //     // will change the above variable depending on the data within the depen array
    //     // check if there are attributes from each selected - if their values are no longer 0
    //     if ( players[0].attriValue !== null && players[1].attriValue !== null )
    //     {
    //     // then check if they're the same attribute - have to compare height for height, not height for age
    //         if ( players[0].attri === players[1].attri )
    //         {
    //             if ( players[0].attriValue > players[1].attriValue )
    //             {
    //                 incrementScore("Player One")
    //                 console.log("scores are: " + scores['Player One'] + " : " + scores['Player Two'])
    //             } else if ( players[0].attriValue < players[1].attriValue )
    //             {
    //                 incrementScore("Player Two")
    //                 console.log("scores are: " + scores['Player One'] + " : " + scores['Player Two'])
    //             } else {
    //                 setResultState("DRAW - DRAW ANOTHER CHARACTER")
    //             }

    //         } else {
    //             setResultState("Different attributes selected - draw again")
    //         }
    //     }

    //     // setWinner()
    // }, [players])
  

    // function setWinner() {
    //     if ( p1Score === 5 || p2Score === 5){
    //         if (p1Score > p2Score) {
    //             setWinnerState("PLAYER 1 WINS")
    //         } else {
    //             setWinnerState("PLAYER 2 WINS")
    //         }
    //     }
    // }
    
    return (
        <div>
            <div>{scores['Player One']}</div><div>{scores['Player Two']}</div>
            <p>{resultState}</p>
        </div>

    )
}