import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [cusines, setCusines] = useState(null);

  useEffect(() => {
    getCusines();
  }, []);

  async function getCusines() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8812268&lng=77.6278377&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setCusines(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  }

  if (!cusines) return <h1>Your favourite cusine is loading...</h1>;
  return (
    <div className="carousel-list">
      {cusines.map((cusine,index) => {
        return (
          <Link to={cusine.action.link} key={cusine.id}>
            <CarouselCard {...cusine} />
          </Link>
        );
      })}
    </div>
  );
};
export default Carousel;
