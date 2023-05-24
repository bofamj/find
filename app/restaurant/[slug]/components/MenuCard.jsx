import React from "react";

const MenuCard = ({ menuItems }) => {
  const { name, description, price } = menuItems;
  return (
    <div className=" border rounded p-3 w-[100%] mb-3">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="font-light mt-1 text-sm">{description}</p>
      <p className="mt-7">{price}</p>
    </div>
  );
};

export default MenuCard;
