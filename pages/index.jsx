import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.sass'

import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <div className={styles.mainHomeContainer}>
      <Head>
        <title>Neon Playground</title>
        <meta name="description" content="3 small games coded with react, by Jonathan Moreschi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.homeHeader}>
        <h1 className={styles.homeTitle}>Neon playground</h1>
        <h3 className={styles.homeSubtitle}>A react project</h3>
      </header>
      <main className={styles.homeContainer}>

        <div className={styles.homeLink}>
          <Link href='/tenzies'><a href='' className={styles.link}>Tenzies</a></Link>
        </div>
        <div className={styles.homeLink}>
          <Link href='/quizz'><a href='' className={styles.link}>Quizz</a></Link>
        </div>
        <div className={styles.homeLink}>
          <Link href='/firsttohundred'><a href='' className={styles.link}>First to Hundred</a></Link>
        </div>
      </main>

    </div>
  )
}
