import styles from '../../styles/Hundred.module.sass'
import { useContext } from 'react'
import { hundredGameContext } from '../../context/hundred'

const Dice = () => {
  const { state, dispatch } = useContext(hundredGameContext)



  return (
    <div className={styles.diceContainer}>
      {state.playerOneTotal >= 100 || state.playerTwoTotal >= 100 ?
        <div className={styles.winner}>{state.playerOneTotal >= 100 ? 'Player One' : 'Player Two'} wins the Game !!!</div>
        :
        <div className={styles.CurrentPlayer}>{state.turn ? 'Player One' : 'Player Two'}</div>
      }
      <div className={styles.dice}>[{state.dicevalue}]</div>
      {state.playerOneTotal >= 100 || state.playerTwoTotal >= 100 ?
        <div className={styles.buttonContainer}>
        
          <button onClick={() => dispatch({ type: 'restart' })}>Start New Game</button>
        </div>
        :

        <div className={styles.buttonContainer}>
          <button onClick={() => dispatch({ type: 'roll' })}>Roll Dice</button>
          <button onClick={() => dispatch({ type: 'hold' })}>Hold</button>
        </div>
      }
    </div>
  )
}

export default Dice
