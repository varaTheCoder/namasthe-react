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
  // console.log(props)
debugger
   const {  cusine, imgsrc, resname, rating  } = props.restarunts;
   console.log(props)
    return(
        <div className="res-card">
            <img src={imgsrc} className="res-img"></img>
            <div>{resname}</div>
            <div>{cusine}</div>
            <div>{rating}</div>
        </div>
    )
}


