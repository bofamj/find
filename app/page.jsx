import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { PrismaClient } from "@prisma/client";

import Header from "../components/Header";
import Cards from "../components/Cards";

const prisma = new PrismaClient();
const handler = async () => {
  const restaurant = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
      booking: true,
    },
  });
  return restaurant;
};

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const restaurants = await handler();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center drop-shadow-md">
        {restaurants.map((restaurant) => (
          <Cards key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
