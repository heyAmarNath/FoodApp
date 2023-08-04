import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {
  // const searchText = "KFC";
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);

  function filterData(searchText, restaurants) {
    return restaurants.filter((res) => res.info.name.includes(searchText));
    // return restaurants.filter((res) => res.info.avgRating >= 4.3);
  }
  // useState() return an array of variable name and a function to update the variable
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // event is for reading the data we enter
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
