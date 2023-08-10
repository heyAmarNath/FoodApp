import { IMG_CDN_URL } from "../config";

const CarouselCard = ({ imageId ,id}) => {
  return (
    <div className="carousel-card" key={id}>
      <img alt="logo" src={IMG_CDN_URL + imageId} />
    </div>
  );
};
export default CarouselCard;
