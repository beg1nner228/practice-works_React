import React from 'react'

export default class Homework_8 extends React.Component {
  state = {
    "good": 0,
    "neutral": 0,
    "bad": 0
  }

    handleClick = (feedback) => {
      this.setState(prevState => {
        console.log("Это prevState:", prevState, "Это feedback:", feedback); 
        return {
          [feedback]: prevState[feedback] + 1
        };
      });
    }

  render() {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    const positivePercentage = total === 0 ? 0 : (good / total) * 100

    return (
      <div>
        <h2>Give Feedback</h2>
        <button onClick={() => this.handleClick('good')}>Good</button>
        <button onClick={() => this.handleClick('neutral')}>Neutral</button>
        <button onClick={() => this.handleClick('bad')}>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage.toFixed(2)}%</p>
      </div>
    )
  }
}