import React from "react";
import Navbar from "../../Components/Navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { selectTutorial } from "../../slices/tutorialSlice";
import { selectItems } from "../../slices/tutorialSlice";
import { useSelector } from "react-redux";

const tutorials = ({ endpoint }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const selectedTutorial = (key) => {
    const { title, description, publishedStatus } = key;

    const dataObject = {
      title,
      description,
      publishedStatus,
    };

    dispatch(selectTutorial(dataObject));
  };

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
            <div className="w-full bg-white rounded-lg shadow-lg lg:w-4/5 lg:mr-10">
              <ul className="divide-y-2 divide-gray-100 ">
                {endpoint.map((key) => (
                  <li
                    className="p-3 mb-2 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
                    key={key.id}
                    onClick={() => selectedTutorial(key)}
                  >
                    {key.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/5 pt-10 lg:w-1/3">
            <h1 className="pb-10 text-3xl font-semibold">Selected Tutorials</h1>
            {items.length === 0 ? (
              <div>
                <h4>Title:</h4>
                <p>Description: </p>
                <span>Status: </span>
              </div>
            ) : (
              items?.map(({ title, description, publishedStatus }) => (
                <div>
                  <h4>Title: {title}</h4>
                  <p>Description: {description}</p>
                  <span>
                    Status: {publishedStatus ? "Pending" : "Published"}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default tutorials;

export async function getServerSideProps() {
  const res = await fetch("https://retoolapi.dev/gZ3Hii/reduxAPI");
  const data = await res.json();

  return {
    props: {
      endpoint: data,
    },
  };
}
