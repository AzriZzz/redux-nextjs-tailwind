import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { selectTutorial, saveFiltered } from "../slices/tutorialSlice";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const tutorialList = useSelector(selectTutorial);

  const onSearch = (e) => {
    if (!e.currentTarget.value.length) {
      // clear save filtered, and to re-init the listing back to use original object
      dispatch(saveFiltered({}));
    }
    setSearchInput(e.currentTarget.value);
  };

  const searchListing = (searchInput) => {
    const lists = tutorialList.payload.tutorial.lists[0];
    const searchTutorial = lists.filter((tutor) =>
      tutor.title.toLowerCase().includes(searchInput)
    );

    dispatch(saveFiltered(searchTutorial));
  };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center py-10 sm:px-6 lg:px-8">
        {/* <h2 className='pb-4 text-3xl font-semibold'>Search</h2> */}
        <div className="relative">
          <input
            id="title"
            name="title"
            type="text"
            className="z-0 pl-5 pr-8 border-2 border-gray-200 rounded h-14 w-96 focus:shadow focus:outline-none"
            placeholder="Title"
            onChange={onSearch}
          />
          <div className="absolute top-4 right-3">
            {" "}
            <i className="z-20 text-gray-400 fa fa-search hover:text-gray-500"></i>{" "}
            <SearchIcon
              onClick={() => searchListing(searchInput)}
              className="hidden h-8 p-2 text-white transition ease-out bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2 hover:scale-110 active:scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
