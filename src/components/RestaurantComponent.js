import { restaurants } from "../utils/mockdata";

export const RestaurantComponent = () => {
  return (
    <div className="ResCard-Container">
      {restaurants.map((res, index) => (
        <RestaurantCardComponent key ={index} restarunts={res} />
      ))}
    </div>
  );
};




export const RestaurantCardComponent = (props) => {
   const {  cusine, imgsrc, resname, rating  } = props.restarunts;
    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={imgsrc} className="res-img rounded-lg"></img>
            <div className="font-bold py-4 text-xl">{resname}</div>
            <div>{cusine}</div>
            <div>{rating}</div>
        </div>
    )
}


