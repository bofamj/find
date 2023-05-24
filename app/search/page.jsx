import React from "react";
import ResturntCard from "./components/ResturntCard";
import SeadBar from "./components/SeadBar";
import SearchHeader from "./components/SearchHeader";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const select = {
  main_image: true,
  name: true,
  price: true,
  location: true,
  cuisine: true,
  slug: true,
  reviews: true,
};
const getSearchRestaurant = (searchParams) => {
  if (!searchParams.city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: searchParams.city.toLowerCase(),
          mode: "insensitive",
        },
      },
      cuisine: {
        name: {
          equals: searchParams.cuisine,
        },
      },
      price: {
        equals: searchParams.price,
      },
    },

    select,
  });
};

const fetchAllRegion = async () => {
  const region = await prisma.location.findMany();
  return region;
};
const fetchAllCuisine = async () => {
  const cuisine = await prisma.cuisine.findMany();
  return cuisine;
};

const SearchPage = async (searchParams) => {
  const restaurant = await getSearchRestaurant(searchParams.searchParams);
  const regions = await fetchAllRegion();
  const cuisines = await fetchAllCuisine();

  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SeadBar
          regions={regions}
          cuisines={cuisines}
          searchParams={searchParams}
          price={restaurant.price}
        />
        <div className=" w-5/6">
          {restaurant ? (
            restaurant.map((restaurant) => (
              <ResturntCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>there is no restaurants is this city</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
