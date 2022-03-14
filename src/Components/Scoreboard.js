import './Scoreboard.css'

export default function Scoreboard(props) {

    const { resultState, scores, winnerState, resetGame } = props

    // making the result class hidden so that the scoreboard doesn't jump around when there's
    // no text
    let resultStateClass;
    // if resultState is in its default state
    if (resultState === 'empty') {
        resultStateClass = 'resultStateHidden'
    }

    // to show the score as a tally
    function tallyShow(number) {
        // find the quotient
        var quotient = Math.floor(number/5);

        // find the remainder
        var remainder = number % 5;

        var quotientString = ""

        var remainderString = ""

        for (let i = 0; i < quotient; i++) {
            quotientString += '卌'
        }
        
        for (let i = 0; i < remainder; i++) {
            remainderString += '|'
        }

        var finalTally = quotientString + remainderString;

        return finalTally
    }

    var p1Score = tallyShow(scores['Player One'])
    var p2Score = tallyShow(scores['Player Two'])

    return (
        <div className="scoreBoard">
            <p className={resultStateClass}>{resultState}</p>
            <div className="scores">
                <div className='p1head'>
                    P1
                </div>
                <div className='p2head'>
                    P2
                </div>
                <div className={'p1score'}>
                    <span className={p1Score ? null : 'scoreHidden'}
                    >
                        {p1Score ? p1Score : 'empty'}
                    </span>
                </div>
                <div className='p2score'>
                    <span className={p2Score ? null : 'scoreHidden'}
                    >
                        {p2Score ? p2Score : 'empty'}
                    </span>
                </div>
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