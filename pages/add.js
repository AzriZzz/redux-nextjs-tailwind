import React from 'react'
import Navbar from '../Components/Navbar'
import Head from 'next/head'

const add = () => {
  return (
    <div>
      <Head>
        <title>Add</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        Add
      </main>
      
    </div>
  )
}

export default add
