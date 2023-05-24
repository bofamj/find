import React from "react";

const Images = ({ images }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length}photos
      </h1>
      <div className="flex flex-wrap mx-4 gap-3 items-center justify-center">
        {images.map((image) => (
          <img
            className="w-65 h-55  mr-1 mb-1 md:w-56 md:h-44"
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
