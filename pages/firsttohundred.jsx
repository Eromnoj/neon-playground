import styles from '../styles/Hundred.module.sass';
import { HundredGameContextProvider } from '../context/hundred';

import Dice from '../components/firsttohundred/Dice';
import Player from '../components/firsttohundred/Player';


const Firsttohundred = () => {


  return (
    <HundredGameContextProvider>

      <div className={styles.mainHundredContainer}>

        <div className={styles.hundredHeader}>
          <h1 className={styles.hundredTitle}>First to Hundred</h1>
          <p className={styles.hundredSubtitle}>The Wildest Dice Game</p>
        </div>

        <div className={styles.gameContainer}>

          <div className={styles.gameBox}>


            <Player player={true} />
            <Player player={false} />

            <Dice />
          </div>
        </div>
      </div>
    </HundredGameContextProvider>
  )
}

export default Firsttohundred