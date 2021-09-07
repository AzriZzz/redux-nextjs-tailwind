import React from "react";
import Navbar from "../Components/Navbar";
import Head from "next/head";
import * as moment from 'moment';

const add = () => {
  const registerUser = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const publishedStatus = false;
    const createdDate = moment().format('MMM Do YYYY, h:mm A');
    const updatedDate = moment().format('MMM Do YYYY, h:mm A');

    const res = await fetch("https://retoolapi.dev/gZ3Hii/reduxAPI", {
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
      method: "POST",
    });
    // const result = await res.json();
  };
  return (
    <div>
      <Head>
        <title>Add</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className="w-10/12 mx-auto max-w-screen-2xl">
          <div className="pt-10">
            <h1 className="text-3xl font-bold">Add Tutorials</h1>

            <div className="w-full pt-5 submit-form">
              <form
                className="flex flex-col items-start w-full h-40"
                onSubmit={registerUser}
              >
                <label htmlFor="title" className="py-2 text-xl">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-md shadow-inner w-96"
                  required
                />
                <label htmlFor="description" className="pt-5 pb-3 text-xl">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-md shadow-inner w-96"
                  required
                />
                <button
                  className="p-4 mt-5 text-xl text-white duration-300 bg-green-600 rounded-md shadow hover:bg-green-700"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default add;
