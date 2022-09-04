import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RocketIcon from '../public/static/images/rocket.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Omar Adel - Frontend developer</title>
        <meta name="description" content="Omar Adel - Frontend Engineer" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon
          <Image src={RocketIcon} alt="Rocket Icon" width={100} height={100} />
        </h1>

        <p className={styles.description}>
          Portfolio under construction
        </p>

      </main>
    </div>
  )
}
