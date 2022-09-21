import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className=''>
      <Head>
        <title> Agency</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        <Main />
      </main>
    </div>
  )
}
