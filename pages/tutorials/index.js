import React from "react";
import Navbar from "../../Components/Navbar";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { selectTutorial, selectItems } from "../../slices/tutorialSlice";
import Link from "next/link";

const tutorials = ({ endpoint }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const selectedTutorial = (key) => {
    const { id, title, description, publishedStatus, updatedDate } = key;

    const dataObject = {
      id,
      title,
      description,
      publishedStatus,
      updatedDate,
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
        <section className="flex justify-center w-10/12 mx-auto max-w-screen-2xl">
          <div className="w-1/3 pt-10">
            <h1 className="pb-10 text-3xl font-bold">Tutorials List</h1>
            <div className="w-full bg-white rounded-lg shadow-lg lg:w-5/5 lg:mr-10">
              <ul className="divide-y-2 divide-gray-100 ">
                {endpoint.map((key) => (
                  <li
                    className="p-3 mb-2 text-xl cursor-pointer hover:bg-blue-600 hover:text-blue-200"
                    key={key.id}
                    onClick={() => selectedTutorial(key)}
                  >
                    {key.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/3 pt-10 pl-10 lg:w-1/3">
            <h1 className="pb-10 text-3xl font-bold">Selected Tutorials</h1>
            {items.length === 0 ? (
              <div>
                <h4 className="py-3 text-xl font-semibold">Title:</h4>
                <p className="py-3 text-xl font-semibold">Description: </p>
                <p className="py-3 text-xl font-semibold">Last Update: </p>
                <span className="py-3 text-xl font-semibold">Status: </span>
              </div>
            ) : (
              items?.map(
                ({ id, title, description, publishedStatus, updatedDate }) => (
                  <div key={`${title}${publishedStatus}`}>
                    <h4 className="py-3 text-xl">
                      <span className="font-semibold">Title:</span> {title}
                    </h4>
                    <p className="py-3 text-xl">
                      <span className="font-semibold">Description: </span>{" "}
                      {description}
                    </p>
                    <div className="py-3 text-xl">
                      <span className="font-semibold">Last Update: </span>
                      {updatedDate}
                    </div>
                    <div className="py-3 text-xl">
                      <span className="font-semibold">Status: </span>
                      {publishedStatus ? "Published" : "Pending"}
                    </div>
                    <div className="pt-5">
                      <Link href={`/tutorials/${id}`}>
                        <button className="w-12 p-2 text-black bg-yellow-300 rounded-lg ">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                )
              )
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
