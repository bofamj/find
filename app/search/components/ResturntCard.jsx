import Link from "next/link";
import reviewsAvreg from "../../../utility/reviewsAvreg";
import Price from "../../../components/Price";
import Stars from "../../restaurant/[slug]/components/Stars";

const ResturntCard = ({ restaurant }) => {
  const { reviews } = restaurant;

  const getrating = () => {
    if (reviewsAvreg(reviews) > 4) {
      return <span>Awesome</span>;
    } else if (reviewsAvreg(reviews) <= 4 && reviewsAvreg(reviews) > 3) {
      return <span>very good</span>;
    } else {
      return <span>average</span>;
    }
  };

  return (
    <div className="border-b flex pb-5  ml-4">
      <img
        src={restaurant.main_image}
        alt={restaurant.name}
        className="w-44 rounded"
      />
      <div className="pl-5 h-36">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={reviews} />
          </div>
          <p className="ml-2 text-sm capitalize ">{getrating()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResturntCard;
