// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onTypingTextInput = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="card-container">
          <h1 className="card-heading">Calculate the Letters you enter</h1>
          <label htmlFor="label" className="card-label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="label"
            className="type-input"
            placeholder="Enter the phrase"
            onChange={this.onTypingTextInput}
          />
          <p type="button" className="letter-count letter-count-container">
            No.of letters: {count}
          </p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
