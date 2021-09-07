import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../Components/Navbar";

const TutorialEdit = ({data}) => {
  console.log(data);

  return (
    <div>
      <Head>
        <title>{`Tutorial ${data.id}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
      
    </div>
  );
};

export default TutorialEdit;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://retoolapi.dev/gZ3Hii/reduxAPI/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}


// TIPS: if we pregrenerate our page, use getStaticPath, because we want to pregrenerate that page.
// Since we're using a dynamic page, next.js does not know in advance how many pages it has to create.

export async function getStaticPaths() {
  const res = await fetch("https://retoolapi.dev/gZ3Hii/reduxAPI");
  const data = await res.json();

  const paths = data.map((tutorial) => ({
    params: { id: tutorial.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  };
}
