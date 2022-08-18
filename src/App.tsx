import { useState } from 'react'
import './App.css'

function App() {
  
  const [flips, setFlips] = useState([
    {
      id: 1,
      face: 'heads',
      image: 'https://cosmosofcollectibles.com/wp-content/uploads/2020/12/EU_2Euro_old-293.png',
    },
    {
      id: 2,
      face: 'tails',
      image: 'https://www.fleur-de-coin.com/images/eurocoins/euroimages/Germany2euros.jpg'
    }
  ])

  return (
    <div className="App">
      <header><h1>Flip Coin</h1></header>

      <button onClick={() => {
        const random = Math.floor(Math.random() * flips.length)
        setFlips(flips[random])
      }}>Flip</button>
      <img src={flips.image} alt={flips.face} />

    </div>

  );
}


export default App
