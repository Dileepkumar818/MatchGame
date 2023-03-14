import './index.css'

const Header = props => {
  const {score, time} = props

  return (
    <nav className="bg-navbar">
      <ul className="logo-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="game-logo"
          />
        </li>
      </ul>
      <ul className="score-board">
        <li className="score-container">
          <p>
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
        </li>
        <li className="timer-container">
          <p className="timer">{time} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
