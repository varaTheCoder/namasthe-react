// import { restaurants } from "../utils/mockdata";

// export const RestaurantComponent = () => {
//   return (
//     <div className="ResCard-Container">
//       {restaurants.map((res, index) => (
//         <RestaurantCardComponent key ={index} restarunts={res} />
//       ))}
//     </div>
//   );
// };




export const RestaurantCardComponent = (props) => {
   const {  cusine, imgsrc, resname, rating, promoted  } = props.restarunts;
    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={imgsrc} className="res-img rounded-lg"></img>
            <div className="font-bold py-4 text-xl">{resname}</div>
            <div>{cusine}</div>
            <div>{rating}</div>
        </div>
    )
}


//Higher order Component
export const withPromotedLabel = (RestaurantCardComponent) => {
  return(props) => {
    return(
      <div>
        <label className="absolute p-3 m-2 bg-black text-white rounded-lg">Promoted</label>
        <RestaurantCardComponent {...props}/>
      </div>
    )
  }
 
};

