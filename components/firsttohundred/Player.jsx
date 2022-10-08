import styles from '../../styles/Hundred.module.sass'
import { useContext } from 'react'
import { hundredGameContext } from '../../context/hundred'

const Player = ({ player }) => {
  const { state, dispatch } = useContext(hundredGameContext)
  const playerDisplay = player ? 'Player One' : 'Player Two'

//  if ((!player && state.playerTwoTotal >=100)(player && state.playerOneTotal >=100))
  return (
    <div className={
      (!player && state.playerTwoTotal >=100) || (player && state.playerOneTotal >=100)?
        styles.playerWinner
       : player === state.turn ?
        styles.playerActive
        : styles.player
    }>
      <h3>{playerDisplay}</h3>
      <div className={styles.currentContainer}>
        <p>Current</p>
        <p className={styles.currentScore}>{player === state.turn ? state.current : '0'}</p>
      </div>

      <div className={styles.totalContainer}>
        <p>Total</p>
        <p className={styles.totalScore}>
          {player ? state.playerOneTotal : state.playerTwoTotal}
        </p>

      </div>
    </div>
  )
}

export default Player