import Form from "./components/Form";
import Header from "./components/Header";

import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const getRestaurant = async (slug) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      name: true,
      main_image: true,
    },
  });
  if (!restaurant) {
    return notFound();
  }
  return restaurant;
};

const ReservationPage = async ({ params, searchParams }) => {
  const restaurant = await getRestaurant(params.slug);
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-[80%] m-auto">
          <Header restaurant={restaurant} searchParams={searchParams} />

          <Form slug={params.slug} searchParams={searchParams} />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
