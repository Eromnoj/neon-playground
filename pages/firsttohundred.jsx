import styles from '../styles/Hundred.module.sass';
import { HundredGameContextProvider } from '../context/hundred';

import Dice from '../components/firsttohundred/Dice';
import Player from '../components/firsttohundred/Player';
import Link from 'next/link';


const Firsttohundred = () => {


  return (
    <HundredGameContextProvider>

      <div className={styles.mainHundredContainer}>

        <div className={styles.hundredHeader}>
          <div className={styles.homeLink}>
            <Link href='/'><a href='' className={styles.link}>Back to game selection</a></Link>
          </div>
          <h1 className={styles.hundredTitle}>First to Hundred</h1>
          <p className={styles.hundredSubtitle}>The Wildest Dice Game</p>
          <div className={styles.rules}>
            Play against a friend. First player to 100 points wins ! Roll, hold, but be careful, if you get a 1,
            you loose the current points.
          </div>
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