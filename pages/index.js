import Head from 'next/head'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS with Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        Index
      </main>
      
    </div>
  )
}
