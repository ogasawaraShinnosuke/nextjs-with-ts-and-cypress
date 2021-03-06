import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [name, setName] = React.useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value) } value={name} placeholder="type name" />
          <br />
          {name}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/ogasawaraShinnosuke">https://github.com/ogasawaraShinnosuke</a>
      </footer>
    </div>
  )
}

export default Home
