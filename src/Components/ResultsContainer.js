import react from 'react'


export default function ResultsContainer(props) {

    const { gameState } = props

    function gameRestart(){
        console.log('hello')
        if (gameState !== 0){
            gameState = 0;
        }
    }

    return (
        <div>
            <p>Results</p>
            <button
                onClick={gameRestart}
            >
                Restart
            </button>
        </div>

    )
}