import "./main.css";
import data from "../../Data-Api/data";
import { useState } from "react";
import HeroSwiper from "../C-Swiper/HeroSwiper";

const Main = () => {
  const [items, setItems] = useState(data);

  const handleSlideChange = (id) => {
    const newItems = items.map((item) => {
      item.active = false;
      if (item._id == id) {
        item.active = true;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="mainBox position-relative">
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <div key={item._id} className="bcgImg">
            <div
              className={`bgImageContainer ${
                item.active ? "active" : undefined
              }`}
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
            ></div>
          </div>
        ))}

      <HeroSwiper slides={items} slideChange={handleSlideChange} />
    </div>
  );
};

export default Main;
