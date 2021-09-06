import React from "react";
import Navbar from "../../Components/Navbar";
import Head from "next/head";

const tutorials = ({ endpoint }) => {
  return (
    <div>
      <Head>
        <title>Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className="flex w-10/12 mx-auto max-w-screen-2xl">
          <div className="w-4/5 pt-10">
            <h1 className="pb-10 text-3xl font-semibold">Tutorials List</h1>
            <div class="w-full bg-white rounded-lg shadow-lg lg:w-2/3">
              <ul class="divide-y-2 divide-gray-100 ">
                {endpoint.map((key) => (
                  <li
                    class="p-3 hover:bg-blue-600 hover:text-blue-200 mb-2 cursor-pointer"
                    key={key.id}
                  >
                    {key.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/5 pt-10 lg:w-1/3">
            <h1 className="pb-10 text-3xl font-semibold">Selected Tutorials</h1>
            
            <h4>Title: Selected</h4>
            <p>Description: Lorem Ipsum Del Amet</p>
            <span>Status: Pending</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default tutorials;

export async function getServerSideProps(context) {
  const res = await fetch("https://retoolapi.dev/gZ3Hii/reduxAPI");
  const data = await res.json();

  return {
    props: {
      endpoint: data,
    }, // will be passed to the page component as props
  };
}
