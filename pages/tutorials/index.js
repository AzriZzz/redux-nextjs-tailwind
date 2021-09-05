import React from 'react'
import Navbar from '../../Components/Navbar'
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
        <section className="w-10/12 mx-auto max-w-screen-2xl">
          <div className="pt-10">
            <h1 className='text-3xl'>Tutorials Page</h1>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default tutorials
