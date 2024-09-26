import './index.css'

const Score = props => {
  const {score} = props
  return (
    <div className="score-container">
      <div>
        <h1 className="score-heading">
          ROCK
          <br />
          <br />
          PAPER
          <br />
          <br />
          SCISSORS
        </h1>
      </div>
      <div className="score-display-container">
        <p className="score">Score</p>
        <p className="score-number">{score}</p>
      </div>
    </div>
  )
}

export default Score
