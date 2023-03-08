// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {count: 0, Heads: 0, Tails: 0, Image: true}

  onclickChange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        Image: true,
        Heads: prevState.Heads + 1,
        count: prevState.count + 1,
      }))
    } else {
      this.setState(prevState => ({
        Image: false,
        count: prevState.count + 1,
        Tails: prevState.Tails + 1,
      }))
    }
  }

  render() {
    const {count, Heads, Tails, Image} = this.state
    const imageResult = Image ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        className="img"
        alt="toss result"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        className="img"
        alt="toss result"
      />
    )
    console.log(Heads)
    console.log(Tails)
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          {imageResult}
          <button
            className="button-style"
            type="button"
            onClick={this.onclickChange}
          >
            Toss Coin
          </button>
          <div className="para-row-container">
            <p className="para-style">Total: {count}</p>
            <p className="para-style">Heads: {Heads}</p>
            <p className="para-style">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
