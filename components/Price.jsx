import { APP_PATHS_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";

const Price = ({ price }) => {
  const randerPrice = () => {
    if (price === "CHEAP") {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === "REGULAR") {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };

  return <p className="flex mr-3">{randerPrice()}</p>;
};

export default Price;
