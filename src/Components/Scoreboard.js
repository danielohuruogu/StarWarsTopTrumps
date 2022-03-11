import './Scoreboard.css'

export default function Scoreboard(props) {

    const { resultState, scores, winnerState, resetGame } = props

    return (
        <div className="scoreBoard">
            <div className="scores">
                <span>{scores['Player One']}</span>
                <span>{resultState}</span>
                <span>{scores['Player Two']}</span>
            </div>
            <p>{winnerState}</p>
            <button
                onClick={resetGame}
            >
                Restart
            </button>
        </div>

    )
}