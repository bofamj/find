import { format } from "date-fns";

const Header = ({ restaurant, searchParams }) => {
  const day = searchParams.date.split("T")[0];
  const time = searchParams.date.split("T")[1];
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];

  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex flex-col gap-4 md:gap-1 md:flex-row">
        <img src={restaurant.main_image} alt="" className="w-40  rounded" />
        <div className="ml-0 md:ml-4">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex mt-3">
            <p className="mr-6">{format(new Date(day), "ccc,LLL,d")}</p>
            <p className="mr-6">
              {hour}:{minute}
            </p>
            <p className="mr-6">{searchParams.partySize} people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
