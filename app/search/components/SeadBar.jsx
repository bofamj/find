import Link from "next/link";
import { PRICE } from "@prisma/client";

const SeadBar = async ({ cuisines, regions, searchParams }) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {regions.map((region) => (
          <p p className="font-light text-reg capitalize" key={region.id}>
            <Link
              href={{
                pathname: "/search",

                query: {
                  ...searchParams.searchParams,
                  city: region.name,
                },
              }}
            >
              {" "}
              {region.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p className="font-light text-reg capitalize" key={cuisine.id}>
            <Link
              href={{
                pathname: "/search",

                query: {
                  ...searchParams.searchParams,
                  cuisine: cuisine.name,
                },
              }}
            >
              {cuisine.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link
            href={{
              pathname: "/search",

              query: {
                ...searchParams.searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className="border w-full text-reg font-light rounded-l p-2"
          >
            $
          </Link>
          <Link
            href={{
              pathname: "/search",

              query: {
                ...searchParams.searchParams,
                price: PRICE.REGULAR,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light p-2"
          >
            $$
          </Link>
          <Link
            href={{
              pathname: "/search",

              query: {
                ...searchParams.searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeadBar;
