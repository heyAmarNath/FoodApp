import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const param = useParams();
  console.log(param);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch("");
    const jsonData = await data.json();
    setRestaurant(jsonData);
  }

  return (
    <>
      <h1>{restaurant.name}</h1>
    </>
  );
};

export default RestaurantMenu;
