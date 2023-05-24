import RestaurantNavBar from "../../../../components/RestaurantNavBar";
import React from "react";
import Header from "../components/Header";
import Menus from "../components/Menus";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug) => {
  const menuItems = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
      main_image: true,
    },
  });
  return menuItems;
};

const Menu = async ({ params }) => {
  const menuItems = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <Header img={menuItems.main_image} />

      <div className="flex m-auto md:w-2/3 justify-between items-start 0 -mt-11 w-[90%]">
        <div className="bg-white w-[100%] rounded mb-5  p-3 shadow dark:bg-slate-900">
          <RestaurantNavBar slug={params.slug} />
          <Menus menuItems={menuItems.items} />
        </div>
      </div>
    </>
  );
};

export default Menu;
