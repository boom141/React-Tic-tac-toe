import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [turn, setTurn] = useState(false)
  const [win, setWinner] = useState(null)
  var p1Counter, p2Counter, i = -1
  //pattern combinations
  let Combi = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6],
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6],
]

const Tiles = document.getElementsByClassName('SquareTiles')

//indefinite loop for checking of winner combinations
useEffect(()=>{
  let loop = setInterval(()=>{
    try {
       i = i<Combi.length ? ++i : 0
        p1Counter=0
        p2Counter=0
            for(let j = 0; j<3; j++){
                if(Tiles[Combi[i][j]].classList.contains('player1'))
                    p1Counter++
                if(Tiles[Combi[i][j]].classList.contains('player2'))
                    p2Counter++      
            }     

        if(p1Counter === 3) {      
          clearInterval(loop)
          Winner("Player 1 Won")
        }    
        if(p2Counter === 3) {
          clearInterval(loop)
          Winner("Player 2 Won")
        }
    } catch (error) {
      //prevent uncaught errors from showing on the log
    }
  },100)
})

//to state the winner
  function Winner(data){
    setWinner(data)
    for(let tiles of Tiles){
      tiles.style.pointerEvents = "none"
    }
  }

//to determine if X or O is the current player
  function click(e){
    setTurn(!turn)
    e.target.classList.add(turn ? 'player2':'player1')
    e.target.style.pointerEvents = 'none'
  }
  //to reset
  function reset(){
    window.location.reload()
  }

  return (
    <div className='body'>
      <div onClick={click} className="Board">
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
      <div className="SquareTiles"></div>
    </div>
    <div className='playerWinner'>{win}</div>
    <button onClick={reset} className='reset'>RESET</button>
    </div>
      
  )
}

export default App;
