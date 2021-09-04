import React from 'react'
import Navbar from '../Components/Navbar'
import Head from 'next/head'

const tutorials = () => {
  return (
    <div>
      <Head>
        <title>Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
      
    </div>
  )
}

export default tutorials
