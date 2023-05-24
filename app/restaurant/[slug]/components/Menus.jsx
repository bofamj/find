import React from "react";
import MenuCard from "./MenuCard";

const Menus = ({ menuItems }) => {
  return (
    <main className="bg-white mt-5  dark:bg-slate-900">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="grid gap-2 grid-cols-1   md:grid-cols-2">
          {menuItems.map((item) => (
            <MenuCard key={item.id} menuItems={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Menus;
