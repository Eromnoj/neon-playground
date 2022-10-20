import styles from '../../styles/Hundred.module.sass'
import { useRef, useContext, useState } from 'react'
import { hundredGameContext } from '../../context/hundred'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa"
import { gsap } from 'gsap' 


const Dice = () => {
  const { state, dispatch } = useContext(hundredGameContext)
  const diceRef = useRef()
  const [animDice, setanimDice] = useState(true)
  let diceFace
  switch (state.dicevalue) {
    case 1:
      diceFace = <FaDiceOne className={styles.diceIcon} />
      break;
    case 2:
      diceFace = <FaDiceTwo className={styles.diceIcon} />
      break;
    case 3:
      diceFace = <FaDiceThree className={styles.diceIcon} />
      break;
    case 4:
      diceFace = <FaDiceFour className={styles.diceIcon} />
      break;
    case 5:
      diceFace = <FaDiceFive className={styles.diceIcon} />
      break;
    case 6:
      diceFace = <FaDiceSix className={styles.diceIcon} />
      break;

    default:
      break;
  }

  const roll = () => {
    if (animDice){
      setanimDice(false) //block the dice roll before end of animation
      gsap.to(diceRef.current, { rotation: "+=1080", duration: 1 })
      setTimeout(() => {
        dispatch({ type: 'roll' })
      }, 700)
      setTimeout(() => setanimDice(true), 1050)//animation ended allow the dice roll
  
      }
  }
  return (
    <div className={styles.diceContainer}>
      {state.playerOneTotal >= 100 || state.playerTwoTotal >= 100 ?
        <div className={styles.winner}>{state.playerOneTotal >= 100 ? 'Player One' : 'Player Two'} wins the Game !!!</div>
        :
        <div className={styles.currentPlayer}>{state.turn ? 'Player One' : 'Player Two'}</div>
      }
      <div className={styles.dice} ref={diceRef}>{diceFace}</div>
      {state.playerOneTotal >= 100 || state.playerTwoTotal >= 100 ?
        <div className={styles.buttonContainer}>
        
          <button onClick={() => dispatch({ type: 'restart' })}>Start New Game</button>
        </div>
        :

        <div className={styles.buttonContainer}>
          <button onClick={roll}>Roll Dice</button>
          <button onClick={() => dispatch({ type: 'hold' })}>Hold</button>
        </div>
      }
    </div>
  )
}

export default Dice
