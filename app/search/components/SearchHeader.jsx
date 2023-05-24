import SearchBar from "../../.././components/SearchBar";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="h-64  bg-main-bg dark:bg-dark-bg p-2 ">
      <div className="text-center mt-10">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchHeader;
