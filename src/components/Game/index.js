import {Component} from 'react'
import Score from '../Score'
import Rules from '../Rules'
import './index.css'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WON',
  lost: 'LOSE',
  draw: 'DRAW',
}

class Game extends Component {
  state = {
    isGameStart: true,
    score: 0,
    result: gameStatusConstants.inProgress,
    userSelect: '',
    oppentSelect: '',
  }

  userChoice = id => {
    const {choicesList} = this.props
    const oppentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    console.log(id, oppentChoice)
    if (id === oppentChoice) {
      this.setState({
        result: `IT IS ${gameStatusConstants.draw}`,
        userSelect: id,
        oppentSelect: oppentChoice,
        isGameStart: false,
      })
    } else if (id === 'ROCK') {
      if (oppentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.win}`,
          score: prevState.score + 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      } else {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.lost}`,
          score: prevState.score - 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      }
    } else if (id === 'PAPER') {
      if (oppentChoice === 'ROCK') {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.win}`,
          score: prevState.score + 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      } else {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.lost}`,
          score: prevState.score - 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      }
    } else if (id === 'SCISSORS') {
      if (oppentChoice === 'PAPER') {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.win}`,
          score: prevState.score + 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      } else {
        this.setState(prevState => ({
          result: `YOU ${gameStatusConstants.lost}`,
          score: prevState.score - 1,
          userSelect: id,
          oppentSelect: oppentChoice,
          isGameStart: false,
        }))
      }
    }
  }

  renderUserChoice = () => {
    const {choicesList} = this.props
    return (
      <>
        <ul className="choice-list-container">
          {choicesList.map(eachItem => (
            <li key={eachItem.id} className="list-item">
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.userChoice(eachItem.id)
                }}
                data-testid={`${eachItem.id.toLowerCase()}Button`}
              >
                {' '}
                <img
                  src={eachItem.imageUrl}
                  className="choice"
                  alt={eachItem.id}
                />
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  playAgain = () => {
    this.setState({
      isGameStart: true,
    })
  }

  renderResult = () => {
    const {choicesList} = this.props
    const {result, userSelect, oppentSelect} = this.state
    const userItem = choicesList.find(eachItem => eachItem.id === userSelect)
    const oppItem = choicesList.find(eachItem => eachItem.id === oppentSelect)
    console.log(userItem, oppItem)
    return (
      <div className="result-container">
        <div className="choice-view-container">
          <div className="choice-view">
            <h1 className="choice-heading">YOU</h1>
            <img src={userItem.imageUrl} alt="your choice" className="choice" />
          </div>
          <div>
            <h1 className="choice-heading">OPPONENT</h1>
            <img
              src={oppItem.imageUrl}
              alt="opponent choice"
              className="choice"
            />
          </div>
        </div>
        <p className="result-heading">{result}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={this.playAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGameStart, score} = this.state
    return (
      <div className="game-container">
        <Score score={score} />
        {isGameStart ? this.renderUserChoice() : this.renderResult()}
        <Rules />
      </div>
    )
  }
}

export default Game
