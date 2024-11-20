import { RestaurantCardComponent } from "./RestaurantComponent";
//import { restaurants } from "../utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  const [listofRestarunts, setListOfRestarunts] = useState([]);
  
  useEffect(()=>{
    fetchData();
  },

[]);

const fetchData = async () => {
  const data = await fetch('https://mocki.io/v1/78bbf66f-af48-48f7-97a0-8e54eeeea26e');
  const json = await data.json();
  console.log(json)
  setListOfRestarunts(json)
}


if(listofRestarunts.length == 0)
  return <ShimmerComponent />


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
