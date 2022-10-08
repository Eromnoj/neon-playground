import styles from '../../styles/Tenzies.module.sass'

const Dice = ({id,value,isHeld, heldClick}) => {
  return (      
    <div className={!isHeld ? styles.dice : styles.diceSelected} onClick={()=>heldClick(id)}>{value}</div>
  )
}

export default Dice