import styles from '../../styles/Tenzies.module.sass'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa"
import { gsap } from 'gsap' 
import { useEffect,useRef } from 'react'

const Dice = ({id,value,isHeld, heldClick, count}) => {
  const diceRef = useRef()
  let diceFace
  switch (value) {
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

  useEffect(()=> {

    if (!isHeld){
      const rotationAnim = 900 + (Math.floor(Math.random() * 180))
      gsap.to(diceRef.current, { rotation: `+=${rotationAnim}`, duration: 1 })
    }
  },[count,isHeld])
  return (      
    <div className={!isHeld ? styles.dice : styles.diceSelected} onClick={()=>heldClick(id)} ref={diceRef}>{diceFace}</div>
  )
}

export default Dice