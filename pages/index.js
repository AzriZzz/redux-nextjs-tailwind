import Head from "next/head";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS with Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <section className="w-10/12 mx-auto max-w-screen-2xl">
          <div className="pt-10">
            <h1 className='text-3xl'>Welcome to Redux build with Next.js and Tailwind CSS</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
