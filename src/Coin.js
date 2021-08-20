import React, { Component } from 'react'
import './Coin.css';

class Coin extends Component {
    render(){
        const { url } = this.props;
        return <img className='coin' src={url}></img>
    }
}

export default Coin;