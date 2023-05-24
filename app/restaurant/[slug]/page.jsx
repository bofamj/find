import RestaurantNavBar from "../../../components/RestaurantNavBar";
import React from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import Reservation from "./components/Reservation";
import Reviews from "./components/Reviews";
import Titel from "./components/Titel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
      open_time: true,
      close_time: true,
      main_image: true,
    },
  });
  return restaurant;
};

const RestaurantDetailsPage = async ({ params }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <Header name={restaurant.name} img={restaurant.main_image} />
      <div className=" flex flex-col  w-[100%] m-auto  justify-between items-center  -mt-[7.9rem] relative md:items-center md:w-2/3 md:flex-row">
        <div className="bg-white dark:bg-slate-900 dark:text-white dark:border-white  w-[92%] mx-2 m-auto  rounded p-3 shadow mb-5 md:w-[80%] ">
          <RestaurantNavBar slug={restaurant.slug} />
          <Titel name={restaurant.name} />
          <Rating review={restaurant.reviews} />
          <Description description={restaurant.description} />
          <Images images={restaurant.images} />
          <Reviews reviews={restaurant.reviews} restaurant_id={restaurant.id} />
        </div>

        <div className="  w-[100%] h-screen mb-4 mt-4 flex items-start justify-center  text-reg    md:absolute md:-top-7 md:-right-[15%]  md:w-[35%] md:ml-14 ">
          <Reservation
            openTime={restaurant.open_time}
            closeTime={restaurant.close_time}
            slug={restaurant.slug}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetailsPage;
/*md:right-11 md:fixed top-[45%] */
