"use client";
import errorImage from "../public/icons/error.png";

import Image from "next/image";

const Error = ({ error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorImage} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold capitalize">
          Well ther is and error
        </h3>
        <p className="text-xl font-bold capitalize">{error.message}</p>
        <p className="text-reg font-light capitalize">error code 400</p>
      </div>
    </div>
  );
};

export default Error;
