import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Coin from './Coin'
import './Coin.css'

class Game extends Component {
    state={
        coin: '',
        heads: 0,
        tails: 0,
        totalFlips: 0,
    }
    trackGame = () => {
        this.setState(curState => ({ totalFlips: curState.totalFlips + 1}))
    }
    trackHeads = () => {
        this.setState(curState => ({ heads: curState.heads + 1 }))
    }
    trackTails = () => {
        this.setState(curState => ({ tails: curState.tails + 1 }))
    }
    flipCoin = () => {
        let side = Math.floor(Math.random() * 2);
        let coin = this.props.coins[side];
        this.setState(() => ({
            coin: coin
        }))
        this.trackGame()
        side === 0 ? (this.trackHeads()) : (this.trackTails())
    }
    handleClick = () => {
        this.flipCoin();
    }
    render(){
        return(
            <div className="game-container">
                <Coin  
                  className='coin'
                  url={this.state.coin}
                />
                <button onClick={this.handleClick}>Flip Me!</button>
                <div>
                  <p>Total Flips: {this.state.totalFlips}</p>
                  <p>Heads: {this.state.heads}</p>
                  <p>Tails: {this.state.tails}</p>
                </div>
                
            </div>
            
        )
    }
}


export default Game;