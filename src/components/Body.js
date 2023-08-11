import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// import { restaurantList } from "../config";

// function to filter Restaurant from Data
function filterData(searchText, restaurants) {
  return restaurants.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}

const Body = () => {
  // const searchText = "KFC";
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  // useState() return an array of variable name and a function to update the variable

  useEffect(() => {
    console.log("use effect");
    getRestaurants();
  }, []);

  // console.log("render");

  // function for calling swiggy API
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8812268&lng=77.6278377&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);

    const jsonData = await data.json();
    // console.log(jsonData);

    setAllRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} /> //spread operator
          );
        })}
      </div>
    </>
  );
};

export default Body;
