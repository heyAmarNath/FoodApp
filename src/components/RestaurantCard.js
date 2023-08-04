import { IMG_CDN_URL } from "../config";

/* Insted of writing props, we can destructure the object on the go */

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // destructure the restaurant
  // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.info;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
