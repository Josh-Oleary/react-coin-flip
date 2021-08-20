import logo from './logo.svg';
import './App.css';
import Game from './Game'

const coins = [
  'https://tinyurl.com/react-coin-heads-jpg',
  'https://www.coinnews.net/wp-content/uploads/2015/03/2015-W-Proof-Roosevelt-Silver-Dime-Reverse.jpg',
]

function App() {
  return (
    <div>
      <h1 className='title'>Let's Flip A Coin!</h1>
      <Game coins={coins} />
    </div>
  );
}

export default App;
