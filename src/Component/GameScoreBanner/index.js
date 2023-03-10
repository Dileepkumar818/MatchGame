import './index.css'

const GameScoreBanner = props => {
  const {score, resetGame} = props

  const reset = () => {
    resetGame()
  }

  return (
    <div>
      <div className="bg-banner">
        <div className="bg-tropy">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
            alt="trophy"
            className="tropy"
          />
          <p>Your Score</p>
          <p>{score}</p>
          <button className="playAgain" onClick={reset} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameScoreBanner
