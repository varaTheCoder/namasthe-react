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
        <div className="res-card">
            <img src={imgsrc} className="res-img"></img>
            <div>{resname}</div>
            <div>{cusine}</div>
            <div>{rating}</div>
        </div>
    )
}


