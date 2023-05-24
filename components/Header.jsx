import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="h-64  bg-main-bg dark:bg-dark-bg p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-3xl font-bold mb-2 md:text-5xl ">
          Find a restaurant in any loccasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
