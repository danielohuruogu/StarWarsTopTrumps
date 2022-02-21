import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './Components/CardContainer.js'
import ButtonContainer from './Components/ButtonContainer.js'
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

    // var cardInfo = {
    //     "1": {},
    //     "2": {},
    // }

    useEffect(() => {
        grabData()
        console.log(serverData)
    }, [])

    function setRandomNumbers(){
        console.log("CLICK")

        let firstRandom = Math.floor(Math.random()*10);
        let secondRandom = Math.floor(Math.random()*10);

        if (firstRandom == secondRandom){
            while (firstRandom == secondRandom){
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
            <h1>A Star Wars-inspired Top Trumps pun</h1>
            <ButtonContainer
                setRandomNumbers={setRandomNumbers}
              />
            <CardContainer
                cardInfo={cardInfo}
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
