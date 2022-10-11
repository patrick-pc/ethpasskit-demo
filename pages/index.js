import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GeneratePass } from '@web3slinger/ethpasskit'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EthpassKit Demo</title>
        <meta name="description" content="EthpassKit Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GeneratePass
          apiUrl="/api/ethpass/create"
          contractAddress="0xb52424b0dedbc8c26459b571c8ca8a844ec3fb07"
          chainId={137}
        />
      </main>
    </div>
  )
}
