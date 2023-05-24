import React from "react";

const Titel = ({ name }) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-3xl md:text-6xl">{name}</h1>
    </div>
  );
};

export default Titel;
