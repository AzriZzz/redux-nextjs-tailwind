import React from "react";
import Link from "next/link";

function SelectedTutorial({items}) {
  return (
    <div>
      {items?.length === 0 ? (
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
  );
}

export default SelectedTutorial;
