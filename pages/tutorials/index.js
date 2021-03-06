import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Head from "next/head";
import SelectedTutorial from "../../Components/SelectedTutorial";
import Search from "../../Components/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTutorial,
  saveListTutorial,
  selectItems,
  searchTutorial,
} from "../../slices/tutorialSlice";

const tutorials = ({ tutorialList }) => {
  const originalTutorialList = tutorialList;
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filteredTutorial = useSelector(searchTutorial);

  if (filteredTutorial[0] && filteredTutorial[0].length) {
    tutorialList = filteredTutorial[0];
  } else {
    tutorialList = originalTutorialList;
  }

  useEffect(() => {
    dispatch(saveListTutorial(tutorialList));
  }, []);

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
          <Search />
        </section>

        <section className="flex justify-center w-10/12 mx-auto max-w-screen-2xl">
          <div className="w-1/3 pt-5">
            <h1 className="pb-10 text-3xl font-semibold">Tutorials List</h1>
            <div className="w-full bg-white rounded-lg shadow-lg lg:w-5/5 lg:mr-10">
              <ul className="divide-y-2 divide-gray-100 ">
                {tutorialList.map((key) => (
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
          <div className="w-1/3 pt-5 pl-10 lg:w-1/3">
            <h1 className="pb-10 text-3xl font-semibold">Selected Tutorials</h1>
            <SelectedTutorial items={items} />
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
      tutorialList: data,
    },
  };
}
