// import AppLogo from './Star-Wars-Symbol.png';
import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './Components/CardContainer.js'
import Card from './Components/Card.js'
import ResultsContainer from './Components/ResultsContainer.js'

function App() {

    const checkStatus = response => {
        if (response.ok) {
            return response
        }
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }
    
    var totalResults = []

    const grabData = () => {
        var totalPages = 9

        for (let i=1; i <= totalPages; i++) {
            fetch("https://swapi.dev/api/people/?page=" + i)
            .then(checkStatus)
            .then(res => res.json())
            .then(data => {
                totalResults = [...totalResults, ...data.results]
                setServerData(totalResults)
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    useEffect(() => {
        grabData()
        console.log(serverData)
    }, [])

    const [serverData, setServerData] = useState([])

    const [cardInfo, setCardInfo] = useState({})

    const [playerOne, setPlayerOne] = useState({
        attri: '',
        attriValue : null
    })

    const [playerTwo, setPlayerTwo] = useState({
        attri: '',
        attriValue : null
    })

    var players = [playerOne, playerTwo]

    const [resultState, setResultState] = useState("")


    //// FUNCTIONS FOR...FUNCTIONALITY

    ////// STARTING THE GAME

    // gameState 0: opening screen. Title and button. Button wil change game state to 1
    // gameState 1: card outline will appear with button to draw characters. will have restart button to send game state back to 0
    // gameState 2: draw character button clicked, card selected. ready for choosing attributes
    // gameState 3: once attributes on both cards have been selected - and the same attribute - the winner is decided. option to restart will appear
 
    var gameState = 0;

    function gameStart() {

        var cardContainer = document.querySelector('.cardContainer')

        if (gameState === 0 && !cardContainer.classList.contains('visible')){
            cardContainer.classList.toggle('visible');
            gameState = 1;
        }
    }

    function setRandomCharacter() {
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

    return (
        <div className="App">
        {/* <AppLogo/> */}
            <h1>A Star Wars-inspired Top Trumps pun</h1>
            <h2>Let's see who comes out on top</h2>

            <button className='button'
                onClick={gameStart}
            >
                Click to Start
            </button>

            <div className='cardContainer'>
                <Card
                    name="one"
                    info={cardInfo && cardInfo.firstPlayer}
                    playerState={playerOne}
                    setPlayerState={setPlayerOne}
                    />
                <button className='drawBtn'
                    onClick={setRandomCharacter}
                >
                    Draw your characters
                </button>
                <Card
                    name="two"
                    info={cardInfo && cardInfo.secondPlayer}
                    playerState={playerTwo}
                    setPlayerState={setPlayerTwo}
                    />
            </div>
            <ResultsContainer
                gameState={gameState}
                players={players}
                resultState={resultState}
                setResultState={setResultState}
            />

        </div>
    );
}

export default App;
