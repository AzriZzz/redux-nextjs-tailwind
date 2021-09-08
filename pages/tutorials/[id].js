import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../Components/Navbar";
import * as moment from 'moment';

const TutorialEdit = ({ data }) => {
  const { title, description, createdDate, updatedDate, publishedStatus, id } =
    data;
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [status, setStatus] = useState(publishedStatus);

  const onChangeTitle = (e) => {
    setTitleInput(e.currentTarget.value);
  };

  const onChangeDescription = (e) => {
    setDescriptionInput(e.currentTarget.value);
  };

  const updateStatus = async () => {
    const title = titleInput;
    const description = descriptionInput;
    const publishedStatus = true;
    const createdDate = createdDate;
    const updatedDate = moment().format("MMM Do YYYY, h:mm A");

    const res = await fetch(`https://retoolapi.dev/gZ3Hii/reduxAPI/${id}`, {
      body: JSON.stringify({
        title,
        description,
        publishedStatus,
        createdDate,
        updatedDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const result = await res.json();

    setStatus(true);
    console.log("update result :", result);
  };

  // const updateTutorial = async () => {
  //   event.preventDefault();
  //   console.log("update tutorial");

  //   const title = titleInput
  //   const description = descriptionInput
  //   const publishedStatus = status;
  //   const createdDate = createdDate;
  //   const updatedDate = moment().format('MMM Do YYYY, h:mm A');

  //   const res = await fetch(`https://retoolapi.dev/gZ3Hii/reduxAPI${id}`, {
  //     body: JSON.stringify({
  //       title,
  //       description,
  //       publishedStatus,
  //       createdDate,
  //       updatedDate,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "PUT",
  //   });
  //   const result = await res.json();
  // };

  return (
    <div>
      <Head>
        <title>{`Tutorial ${data.id}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className="w-10/12 mx-auto max-w-screen-2xl">
          <div className="pt-10">
            <h1 className="text-3xl font-bold">Update Tutorials</h1>

            <div className="w-full pt-5 submit-form">
              <div className="flex flex-col items-start w-full h-40">
                <label htmlFor="title" className="py-2 text-xl font-semibold">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-md shadow-inner w-96"
                  value={titleInput}
                  required
                  onChange={onChangeTitle}
                />
                <label
                  htmlFor="description"
                  className="pt-5 pb-3 text-xl font-semibold"
                >
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-md shadow-inner w-96"
                  value={descriptionInput}
                  required
                  onChange={onChangeDescription}
                />

                <p className="py-5 text-xl">
                  <span className="font-semibold ">Status:</span>{" "}
                  {status ? "Published" : "Pending"}
                </p>

                <div className="flex space-x-4">
                  {!status ? (
                    <button
                      className="p-2 text-white transition ease-out bg-blue-500 border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-105 "
                      onClick={updateStatus}
                    >
                      Publish
                    </button>
                  ) : (
                    ""
                  )}

                  <button className="p-2 text-white transition ease-out bg-red-500 border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-105">
                    Delete
                  </button>
                  <button className="p-2 text-white transition ease-out bg-green-500 border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-105">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      data,
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
  }));

  return {
    paths,
    fallback: false,
  };
}
