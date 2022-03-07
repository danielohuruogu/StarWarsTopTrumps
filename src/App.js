// import AppLogo from './Star-Wars-Symbol.png';
import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './Components/CardContainer.js'
import Card from './Components/Card.js'
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

    var playerOne = ["attr", null]

    var playerTwo = ["attr", null]

    var players = [playerOne, playerTwo]

    
    function compareAttributes(){
        // check if there are attributes from each selected - if their values are no longer 0
        if ( playerOne[1] !== null && playerTwo[1] !== null )
        {
            console.log('attribute selected - ready for comparison')
        // then check if they're the same attribute - have to compare height for height, not height for age

            if ( playerOne[0] === playerTwo[0] )
            {
                console.log('same attributes selected')
                if ( playerOne[1] > playerTwo[1])
                {
                    console.log('Player One wins!!')
                } else if ( playerOne[1] < playerTwo[1])
                {
                    console.log('Player Two wins!!')
                } else {
                    console.log('Draw - pick another attribute')
                }
            } else {
                console.log('different attributes selected - try something else')
            }
        }
        // then check if one's higher than the other
    }


    function setRandomNumbers(){
        console.log("CLICK")

        let firstRandom = Math.floor(Math.random()*10);
        let secondRandom = Math.floor(Math.random()*10);

        // in case the random numbers end up being the same, do it again
        if (firstRandom === secondRandom){
            while (firstRandom === secondRandom){
              firstRandom = Math.floor(Math.random()*10)
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

    function clearSelection(){
        // reset the array of values to their initial values
        for (let player of players) {
            console.log(player);
            player[0]="attr";
            player[1]=null
        }

        // grab each selection and remove the class name that highlights it
        var selection = document.querySelectorAll('.attr')
        selection.forEach(attri => {
            attri.classList.remove('selected')
        })
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
                    attributes={players[0]}
                    compareAttri={compareAttributes}
                    />
                <button className='drawBtn'
                    onClick={setRandomNumbers}
                >
                    Draw your characters
                </button>
                <Card
                    name="two"
                    info={cardInfo && cardInfo.secondPlayer}
                    attributes={players[1]}
                    compareAttri={compareAttributes}
                    />
            </div>
            <ResultsContainer
                gameState={gameState}
            />

        </div>
    );
}

export default App;
