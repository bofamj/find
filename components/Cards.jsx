import Link from "next/link";
import Price from "./Price";
import Stars from "../app/restaurant/[slug]/components/Stars";

const Cards = ({ restaurant }) => {
  const {
    id,
    name,
    main_image,
    cuisine,
    location,
    price,
    slug,
    reviews,
    booking,
  } = restaurant;

  const dateAndTime = new Date().toISOString(); //* change the date to a string
  const date = dateAndTime.split("T")[0]; //* get the date

  //let bookingThisDay;

  /*  const bookingTime = booking.map((time) => {
    const thisDate = time.booking_time.toISOString().split("T")[0];

    if (thisDate === date) {
      bookingThisDay = thisDate.length / 10;
      return thisDate;
    } else {
      bookingThisDay = 0;
    }
  }); */
  //* find is there is a booking in this day
  const bookingTime = booking.filter(
    (time) => time.booking_time.toISOString().split("T")[0] === date
  );

  //* geting the number of bookings
  //const numperOfBookingToDay =bookingTime.length != 0 && bookingThisDay != 0 ? bookingTime.length : 0;
  const numperOfBookingToDay = bookingTime.length != 0 ? bookingTime.length : 0;

  return (
    <Link href={`/restaurant/${slug}`}>
      <div className=" w-64 h-74 m-3 rounded overflow-hidden  cursor-pointer bg-white dark:text-white dark:bg-slate-900 ">
        <img src={main_image} alt={name ? name : ""} className="w-full h-36" />
        <div className="p-1 ">
          <h3 className="font-bold text-2xl mb-2">{name ? name : ""}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">
              <Stars reviews={reviews} />
            </div>
            <p className="ml-2">
              {reviews.length} review{reviews.length === 1 ? " " : "s"}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize ">
            <p className=" mr-3">{cuisine.name}</p>
            <Price price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold ">
            Booked {numperOfBookingToDay} times today
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
