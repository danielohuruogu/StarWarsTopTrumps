// import AppLogo from './Star-Wars-Symbol.png';
import './App.css';
import { useState, useEffect } from 'react'
import GameContainer from './Components/GameContainer.js'
// import ResultsContainer from './Components/ResultsContainer.js'

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
    }, [])

    const [serverData, setServerData] = useState([])


    //// FUNCTIONS FOR...FUNCTIONALITY

    ////// STARTING THE GAME

    // gameState 0: opening screen. Title and button. Button wil change game state to 1
    // gameState 1: card outline will appear with button to draw characters. will have restart button to send game state back to 0
    // gameState 2: draw character button clicked, card selected. ready for choosing attributes
    // gameState 3: once attributes on both cards have been selected - and the same attribute - the winner is decided. option to restart will appear
 
    const [gameState, setGameState] = useState(0);

    function gameStart() {

        var cardContainer = document.querySelector('.cardContainer')

        if (gameState === 0 && !cardContainer.classList.contains('visible')){
            cardContainer.classList.toggle('visible');
            setGameState(1);
        }
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

            <GameContainer
                serverData={serverData}
                gameState={gameState}
                setGameState={setGameState}
                />
        </div>
    );
}

export default App;
