// import AppLogo from './Star-Wars-Symbol.png';
import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './Components/CardContainer.js'
import ResultsContainer from './Components/ResultsContainer.js'
import { getAllCharacters } from './Adapter/client.js'

function App() {

    const grabData = () => {
        getAllCharacters()
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServerData(data.results)
        }).catch(err => {
            console.log(err.response)
        })
    }

    const [serverData, setServerData] = useState([])

    const [cardInfo, setCardInfo] = useState({})


    useEffect(() => {
        grabData()
        console.log(serverData)
    }, [])

    ////// 
    // gameState 0: opening screen. Title and button. Button wil change game state to 1
    // gameState 1: card outline will appear with button to draw characters. will have restart button to send game state back to 0
    // gameState 2: draw character button clicked, card selected. ready for choosing attributes
    // gameState 3: once attributes on both cards have been selected - and the same attribute - the winner is decided. option to restart will appear
 
    var gameState = 0;

    ////// STARTING THE GAME

    function gameStart(){

        var cardContainer = document.querySelector('.cardContainer')
        console.log(cardContainer)

        if (gameState === 0 && !cardContainer.classList.contains('visible')){
            console.log(gameState)
            cardContainer.classList.toggle('visible');
            gameState++
        }
    }


    function setRandomNumbers(){
        console.log("CLICK")

        let firstRandom = Math.floor(Math.random()*10);
        let secondRandom = Math.floor(Math.random()*10);

        if (firstRandom === secondRandom){
            while (firstRandom === secondRandom){
              firstRandom = Math.floor(Math.random()*10)
            }
        }

        console.log(firstRandom)
        console.log(secondRandom)
        setCardInfo({
            "firstPlayer": serverData[firstRandom],
            "secondPlayer": serverData[secondRandom]
        })
        console.log(cardInfo)

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

            <CardContainer
                cardInfo={cardInfo}
                setRandomNumbers={setRandomNumbers}
              />
            <ResultsContainer
                gameState={gameState}
            />

        </div>
    );
}

export default App;

    // const grabData = () => {
    //     getAllCharacters()
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setServerData(data)
    //     }).catch(err => {
    //     console.log(err.response)
    //     err.response.json().then(res=> {
    //       console.log(res)
    //     })
    // })
  // }
      // grabData();
