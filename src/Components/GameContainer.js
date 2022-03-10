import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card.js'
import Scoreboard from './Scoreboard.js'

const GameContainer = (props) => {

    const { serverData, gameState, setGameState } = props

    const [cardInfo, setCardInfo] = useState({})

    const [playerOne, setPlayerOne] = useState({
        attri: '',
        attriValue : null
    })

    const [playerTwo, setPlayerTwo] = useState({
        attri: '',
        attriValue : null
    })

    const [scores, setScore] = useState({
        "Player One": 0,
        "Player Two": 0
    })

    const [resultState, setResultState] = useState("")

    var players = [playerOne, playerTwo]

    function drawCharacter() {
        let firstRandom = Math.floor(Math.random()*82);
        let secondRandom = Math.floor(Math.random()*82);

        // in case the random numbers end up being the same, do it again
        if (firstRandom === secondRandom) {
            while (firstRandom === secondRandom) {
              firstRandom = Math.floor(Math.random()*82)
            }
        }

        // set the card data to one of the characters in the server data
        setCardInfo({
            "firstPlayer": serverData[firstRandom],
            "secondPlayer": serverData[secondRandom]
        })

        // clear the previous selection on each click
        clearSelection();
    }

    function checkForPoint() {
        console.log("checking...")
        console.log(players[0], players[1])
        // check first to see that attributes have been selected for both
        if ( players[0].attriValue !== null && players[1].attriValue !== null ) {
        // then check if they're the same attribute - have to compare height for height, not height for age
            if ( players[0].attri === players[1].attri )
            {
                // now compare the attributes
                if ( players[0].attriValue > players[1].attriValue )
                {
                    incrementScore("Player One")
                    console.log("scores are: " + scores['Player One'] + " : " + scores['Player Two'])
                } else if ( players[0].attriValue < players[1].attriValue )
                {
                    incrementScore("Player Two")
                    console.log("scores are: " + scores['Player One'] + " : " + scores['Player Two'])
                } else {
                    setResultState("DRAW - DRAW ANOTHER CHARACTER")
                }
                
            } else {
                setResultState("Different attributes selected - draw again")
            }
        } else {
            console.log("still waiting for both clicks, or is wrong")
        }
    }


    function clearSelection() {

        // set comparison attributes to blank
        setPlayerOne({ attri: '', attriValue: null })
        setPlayerTwo({ attri: '', attriValue: null })

        // grab each selection and remove the class name that highlights it
        var selection = document.querySelectorAll('.attr')
        selection.forEach(attri => {
            attri.classList.remove('selected')
        })

        // refresh result state
        setResultState("")
    }

    function incrementScore(player) {
        setResultState(`+1 ${player}`)
        setScore((prevState) => ({
            ...prevState,
            [player]: prevState[player] += 1
        }))
    }

    function resetGame() {
        var cardContainer = document.querySelector('.cardContainer')
        if (gameState !== 0 && cardContainer.classList.contains('visible')){
            clearSelection()
            setGameState(0);
        }
        // setWinnerState("")
        setScore({
            "Player One": 0,
            "Player Two": 0
        })
    }


    return (
        <>
            <div className='cardContainer'>
                    <Card
                        name="Player One"
                        info={cardInfo && cardInfo.firstPlayer}
                        // attributeClick={attributeClick}
                        setPlayerAttriState={setPlayerOne}
                        checkForPoint={checkForPoint}
                        />
                    <button className='drawBtn'
                        onClick={drawCharacter}
                    >
                        Draw your characters
                    </button>
                    <Card
                        name="Player Two"
                        info={cardInfo && cardInfo.secondPlayer}
                        // attributeClick={attributeClick}
                        setPlayerAttriState={setPlayerTwo}
                        checkForPoint={checkForPoint}
                        />
            </div>
            <Scoreboard 
                players={players}
                resultState={resultState}
                setResultState={setResultState}
                scores={scores}
                setScore={setScore}
                incScore={incrementScore}
                />
            <div>
                {/* <p>{winnerState}</p> */}
                <button
                    onClick={resetGame}
                >
                    Restart
                </button>
            </div>
        </>
    )
}

export default GameContainer