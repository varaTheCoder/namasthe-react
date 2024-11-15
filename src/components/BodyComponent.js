import { RestaurantCardComponent } from "./RestaurantComponent";
import { restaurants } from "../utils/mockdata";
import { useState } from "react";

const BodyComponent = () => {
  const [listofRestarunts, setListOfRestarunts] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = listofRestarunts.filter(
              (res) => res.rating > 4.6
            );
            setListOfRestarunts(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="ResCard-Container">
        {listofRestarunts.map((res, index) => (
          <RestaurantCardComponent key={index} restarunts={res} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
