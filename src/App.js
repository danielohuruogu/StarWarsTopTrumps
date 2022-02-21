import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import CardContainer from './CardContainter.js'
import ButtonContainer from './ButtonContainer.js'
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

    const [cardInfo, setCardInfo] = useState([])

    useEffect(()=>{
        grabData()
        console.log(serverData)
    }, [])

    function setRandomNumbers(){
        let randomPicks=[]

        firstRandom = Math.floor(Math.random()*10);
        secondRandom = Math.floor(Math.random()*10);

        randomPicks.push(firstRandom)
        randomPicks.push(secondRandom)
        setCardInfo(serverData[firstRandom],serverData[secondRandom])
    }

    return (
        <div className="App">
            <h1>A Star Wars-inspired Top Trumps pun</h1>
            <ButtonContainer
                setRandomNumbers={setRandomNumbers}
              />
            <CardContainer
                cardInfo={CardInfo}
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
