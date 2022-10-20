import styles from '../styles/Tenzies.module.sass'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import Dice from "../components/tenzies/Dice"
const Tenzies = () => {

  const newGame = () => {
    const handleNewRoll = []
    for (let i = 0; i < 10; i++) {
      handleNewRoll.push({ id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false })

    }
    return handleNewRoll
  }


  const heldDice = (id) => {
    setRoll(prev => prev.map(die => die.id === id ?
      {
        ...die,
        isHeld: !die.isHeld
      }
      :
      die
    ))
  }

  const rollDice = () => {
    if (!tenzies) {
      setRoll(prev => prev.map(die => !die.isHeld ?
        {
          ...die,
          value: Math.ceil(Math.random() * 6)
        }
        :
        die
      ))

      setCount(prev => prev + 1)
    } else {
      if (count < bestScore || bestScore === 0) {
        setBestScore(count)
      }
      setCount(0)
      setTenzies(false)
      setRoll(newGame())
    }
  }


  const [roll, setRoll] = useState(newGame())
  const [count, setCount] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    if (roll.every(die => die.isHeld)) {
      setTenzies(roll.every(die => die.value === roll[0].value))
    }
  }, [roll])

  useEffect(()=> {
    newGame()
  },[])



  const displayDice = roll.map(die => <Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} heldClick={heldDice} count={count} />)

  return (
    <div className={styles.mainTenziesContainer}>
      <div className={styles.tenziesHeader}>
        <h1 className={styles.tenziesTitle}>Tenzies</h1>
        <p className={styles.tenziesSubtitle}>Another game of Dice</p>
      </div>

      <div className={styles.gameContainer}>

        <div className={styles.gameBox}>
          <div className={styles.scores}>
            <h3>Current score : <span className={styles.currentScore}>{count}</span></h3>

            <h3>Best score : <span className={styles.bestScore}>{bestScore}</span></h3>
          </div>
          <div className={styles.diceContainer}>
            {displayDice}
          </div>
          {tenzies && <div>You Win !!</div> }
          <button className={styles.rollButton} onClick={rollDice} >{tenzies ? 'New Game' : 'Roll dice'}</button>
        </div>

      </div>

    </div>
  )
}

export default Tenzies