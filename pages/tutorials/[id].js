import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../Components/Navbar";
import * as moment from "moment";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectTutorial } from "../../slices/tutorialSlice";

const TutorialEdit = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { title, description, createdDate, publishedStatus, id } = data;
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [status, setStatus] = useState(publishedStatus);

  const onChangeTitle = (e) => {
    setTitleInput(e.currentTarget.value);
  };

  const onChangeDescription = (e) => {
    setDescriptionInput(e.currentTarget.value);
  };

  const confirmationUpdate = (tutorId) => {
    window.confirm("Are you sure you wish to update this tutorial?") &&
      updateTutorial(`${tutorId}`);
  };

  const confirmationDelete = (tutorId) => {
    window.confirm("Are you sure you wish to delete this tutorial?") &&
      deleteTutorial(`${tutorId}`);
  };

  const updateStatus = async () => {
    const apiBody = {
      title: titleInput,
      description: descriptionInput,
      publishedStatus: true,
      createdDate: createdDate,
      updatedDate: moment().format("MMM Do YYYY, h:mm A"),
    };
    const method = "PUT";
    const message = "published";
    callAPI(id, apiBody, method, message);
  };

  const updateTutorial = async (tutorId) => {
    const apiBody = {
      title: titleInput,
      description: descriptionInput,
      publishedStatus: status,
      createdDate: createdDate,
      updatedDate: moment().format("MMM Do YYYY, h:mm A"),
    };
    const method = "PUT";
    const message = "update";
    callAPI(tutorId, apiBody, method, message);
  };

  const deleteTutorial = async (tutorId) => {
    const apiBody = {
      title: titleInput,
      description: descriptionInput,
      publishedStatus: status,
      createdDate: createdDate,
      updatedDate: moment().format("MMM Do YYYY, h:mm A"),
    };
    const method = "DELETE";
    const message = "delete";
    callAPI(tutorId, apiBody, method, message);
  };

  const callAPI = async (tutorId, apiBody, method, message) => {
    const res = await fetch(
      `https://retoolapi.dev/gZ3Hii/reduxAPI/${tutorId}`,
      {
        body: JSON.stringify(apiBody),
        headers: {
          "Content-Type": "application/json",
        },
        method,
      }
    );
    const result = await res.json();
    if (method === "DELETE") {
      dispatch(selectTutorial({}));
    } else {
      dispatch(selectTutorial(result));
    }

    alert(`Title: '${apiBody.title}' with ID:${tutorId} has been ${message}.`);
    if (message !== 'published') {
      router.push("/tutorials");
    } else {
      setStatus(true);
    }
  };

  return (
    <div>
      <Head>
        <title>{`Tutorial ${id}`}</title>
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
                  className="flex-1 w-full p-3 border-2 border-gray-200 rounded-md shadow-inner md:w-96"
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
                  className="flex-1 w-full p-3 border-2 border-gray-200 rounded-md shadow-inner md:w-96"
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

                  <button
                    className="p-2 text-white transition ease-out bg-red-500 border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-105"
                    onClick={() => confirmationDelete(id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => confirmationUpdate(id)}
                    className="p-2 text-white transition ease-out bg-green-500 border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-105"
                  >
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
