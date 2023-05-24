import fullStar from "../../../../public/icons/full-star.png";
import halfStar from "../../../../public/icons/half-star.png";
import embtyStar from "../../../../public/icons/empty-star.png";
import reviewsAvreg from "../../../../utility/reviewsAvreg";
import Image from "next/image";

const Stars = ({ reviews, rating }) => {
  const reviewsRating = rating || reviewsAvreg(reviews);

  const calcolateStar = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const defrences = parseFloat((reviewsRating - i).toFixed(1));

      if (defrences >= 1) stars.push(fullStar);
      else if (defrences < 1 && defrences > 0) {
        if (defrences <= 0.2) stars.push(embtyStar);
        else if (defrences > 0.2 && defrences <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else stars.push(embtyStar);
    }
    return stars.map((star) => {
      return (
        <Image src={star} alt="" className="w-4 h-4 mr-1 dark:text-slate-900" />
      );
    });
  };

  return <div className="flex items-center">{calcolateStar()}</div>;
};

export default Stars;
