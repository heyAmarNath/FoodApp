import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Cuisine = () => {
  const [cuisineRestaurants, setCuisineRestaurants] = useState(null);
  // console.log(cuisineRestaurants);

  useEffect(() => {
    listByCuisine();
  }, []);

  async function listByCuisine() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8812268&lng=77.6278377&collection=83646&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING"
    );
    console.log(data);

    const json = await data?.json();

    setCuisineRestaurants(json?.data?.cards);
    console.log(json?.data?.cards);
  }
  if (!cuisineRestaurants) return <h1>Go back</h1>;
  return (
    // <h1>Loading</h1>
    <div>
      {cuisineRestaurants.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default Cuisine;
