import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {
  MainContainer,
  ScoreContainer,
  HeadingContainer1,
  Heading,
  SubScoreContainer,
  ScorePara,
  ScoreElement,
  MainButtonsContainer,
  ButtonsContainer,
  RockButton,
  ScissorsButton,
  PaperButton,
} from './styledComponents'

const clickButtonConstants = {
  rock: 'ROCK',
  scissors: 'SCISSORS',
  paper: 'PAPER',
  initial: 'INITIAL',
}
const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    score: 0,
    result: '',
    myChoice: '',
    opponent: '',
    clickButton: clickButtonConstants.initial,
  }

  onClickPlayAgainButton = () =>
    this.setState({
      result: '',
      myChoice: '',
      opponent: '',
      clickButton: clickButtonConstants.initial,
    })

  onClickRockButton = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const myChoiceItem = choicesList[0]
    const Opponents = choicesList[randomIndex]
    this.setState({
      opponent: Opponents,
      myChoice: myChoiceItem,
      clickButton: clickButtonConstants.rock,
    })
    if (myChoiceItem.id === 'ROCK' && Opponents.id === 'SCISSORS') {
      const gameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'ROCK' && Opponents.id === 'PAPER') {
      const gameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'ROCK' && Opponents.id === 'ROCK') {
      const gameResult = 'IT IS DRAW'
      this.setState({
        result: gameResult,
      })
    }
  }

  onClickScissorsButton = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const myChoiceItem = choicesList[1]
    const Opponents = choicesList[randomIndex]
    this.setState({
      opponent: Opponents,
      myChoice: myChoiceItem,
      clickButton: clickButtonConstants.scissors,
    })
    if (myChoiceItem.id === 'SCISSORS' && Opponents.id === 'PAPER') {
      const gameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'SCISSORS' && Opponents.id === 'ROCK') {
      const gameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'SCISSORS' && Opponents.id === 'SCISSORS') {
      const gameResult = 'IT IS DRAW'
      this.setState({
        result: gameResult,
      })
    }
  }

  onClickPaperButton = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const myChoiceItem = choicesList[2]
    const Opponents = choicesList[randomIndex]
    this.setState({
      opponent: Opponents,
      myChoice: myChoiceItem,
      clickButton: clickButtonConstants.paper,
    })
    if (myChoiceItem.id === 'PAPER' && Opponents.id === 'ROCK') {
      const gameResult = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'PAPER' && Opponents.id === 'SCISSORS') {
      const gameResult = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: gameResult,
      }))
    } else if (myChoiceItem.id === 'PAPER' && Opponents.id === 'PAPER') {
      const gameResult = 'IT IS DRAW'
      this.setState({
        result: gameResult,
      })
    }
  }

  InitialView = () => (
    <ButtonsContainer>
      <MainButtonsContainer>
        <RockButton data-testid="rockButton" onClick={this.onClickRockButton}>
          <img
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            className="button-style"
          />
        </RockButton>
        <ScissorsButton
          data-testid="scissorsButton"
          onClick={this.onClickScissorsButton}
        >
          <img
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            className="button-style"
          />
        </ScissorsButton>
      </MainButtonsContainer>
      <div className="paper-container">
        <PaperButton
          data-testid="paperButton"
          onClick={this.onClickPaperButton}
        >
          <img
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            className="button-style"
          />
        </PaperButton>
      </div>
    </ButtonsContainer>
  )

  clickRockButtonView = () => {
    const {myChoice, opponent, result} = this.state
    return (
      <div className="click-rock-button-container">
        <div className="inner-container1">
          <div>
            <h1 className="choice-heading1">YOU</h1>
            <img
              src={myChoice.imageUrl}
              alt="your choice"
              className="image-style2"
            />
          </div>
          <div>
            <h1 className="choice-heading2">OPPONENT</h1>
            <img
              src={opponent.imageUrl}
              alt="opponent choice"
              className="image-style2"
            />
          </div>
        </div>
        <p className="result-heading">{result}</p>
        <button
          type="button"
          onClick={this.onClickPlayAgainButton}
          className="play-again-button"
        >
          play again
        </button>
      </div>
    )
  }

  clickScissorsButtonView = () => {
    const {myChoice, opponent, result} = this.state
    return (
      <div className="click-rock-button-container">
        <div className="inner-container1">
          <div>
            <h1 className="choice-heading1">YOU</h1>
            <img
              src={myChoice.imageUrl}
              alt="your choice"
              className="image-style2"
            />
          </div>
          <div>
            <h1 className="choice-heading2">OPPONENT</h1>
            <img
              src={opponent.imageUrl}
              alt="opponent choice"
              className="image-style2"
            />
          </div>
        </div>
        <p className="result-heading">{result}</p>
        <button
          type="button"
          onClick={this.onClickPlayAgainButton}
          className="play-again-button"
        >
          play again
        </button>
      </div>
    )
  }

  clickPaperButtonView = () => {
    const {myChoice, opponent, result} = this.state
    return (
      <div className="click-rock-button-container">
        <div className="inner-container1">
          <div>
            <h1 className="choice-heading1">YOU</h1>
            <img
              src={myChoice.imageUrl}
              alt="your choice"
              className="image-style2"
            />
          </div>
          <div>
            <h1 className="choice-heading2">OPPONENT</h1>
            <img
              src={opponent.imageUrl}
              alt="opponent choice"
              className="image-style2"
            />
          </div>
        </div>
        <p className="result-heading">{result}</p>
        <button
          type="button"
          onClick={this.onClickPlayAgainButton}
          className="play-again-button"
        >
          play again
        </button>
      </div>
    )
  }

  renderingTheViews = () => {
    const {clickButton} = this.state
    switch (clickButton) {
      case clickButtonConstants.rock:
        return this.clickRockButtonView()
      case clickButtonConstants.scissors:
        return this.clickScissorsButtonView()
      case clickButtonConstants.paper:
        return this.clickPaperButtonView()
      default:
        return this.InitialView()
    }
  }

  render() {
    const {score, opponent, myChoice, result} = this.state
    console.log(score)
    console.log(`opponent is ${opponent}`)
    console.log(`myChoice is ${myChoice}`)
    console.log(result)
    return (
      <MainContainer>
        <ScoreContainer>
          <HeadingContainer1>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>
          </HeadingContainer1>
          <SubScoreContainer>
            <ScorePara>Score</ScorePara>
            <ScoreElement>{score}</ScoreElement>
          </SubScoreContainer>
        </ScoreContainer>
        {this.renderingTheViews()}

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <div className="rules-container">
                <button type="button" className="Rules-button">
                  Rules
                </button>
              </div>
            }
            className="popup-content"
          >
            {close => (
              <>
                <div>
                  <div className="close-button-styling">
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine className="close-icon" />
                    </button>
                  </div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rules-image"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </MainContainer>
    )
  }
}

export default GameView
