import { Img_src } from "../utils/constants";

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
  debugger
  console.log(props)
  let {restarunts} = props;
   const {  cuisines, cloudinaryImageId, name, avgRating, type  } = restarunts;
    return(
        <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={Img_src + cloudinaryImageId} className="res-img rounded-lg"></img>
            <div className="font-bold py-4 text-xl">{name}</div>
            <div>{cuisines.join(',')}</div>
            <div>{avgRating}</div>
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

