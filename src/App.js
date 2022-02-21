import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { getAllCharacters } from './Adapter/client.js'

function App() {

    let url = 'https://swapi.dev/api/people/'

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div className="App">
        

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
  // const [serverData, setServerData] = useState([])
      // grabData();
