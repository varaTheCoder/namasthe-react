import { RestaurantCardComponent ,withPromotedLabel} from "./RestaurantCardComponent";
//import { restaurants } from "../utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [listofRestarunts, setListOfRestarunts] = useState([]);
  const [filteredRestarunts, setfilteredRestarunts] = useState([]);
  const [searchtext, setsearchText] = useState ("");
  const PromotedRestaruntCard = withPromotedLabel(RestaurantCardComponent);
  
  useEffect(()=>{
    fetchData();
  },

[]);

const fetchData = async () => {
  // const data = await fetch(
  //   "https://mocki.io/v1/78bbf66f-af48-48f7-97a0-8e54eeeea26e"
  // );
  //  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.509078&lng=78.3001221&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  
  const data = await fetch('https://mocki.io/v1/7522322e-c2fb-4ea6-90ae-cbd84d595c67');
  const json = await data.json();
  console.log(json);
  const RestaruntData =  json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
  debugger
  setListOfRestarunts(RestaruntData);
  setfilteredRestarunts(RestaruntData);
  //   setListOfRestarunts(json.data.cards[5].card.card.gridElements.infoWithStyle.restarunts)
  //   setfilteredRestarunts(json.data.cards[5].card.card.gridElements.infoWithStyle.restarunts)
};

let onlineStatus = useOnlineStatus();

if(listofRestarunts.length == 0)
  return <ShimmerComponent />
if(!onlineStatus)
  return <h1>Opps! your internet is down, Please check</h1>
else
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchtext} onChange={(e)=> {
            setsearchText(e.target.value)
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ () => {

        
          const filteredRestarunts = listofRestarunts.filter((res) => 
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            )

            setfilteredRestarunts(filteredRestarunts)
          }
          }>Search</button>
        </div>
        <div className="m-4 p-4 ">  <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = filteredRestarunts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredRestarunts(filteredList);
          }}
        >
          Top Rated Restaurents
        </button></div>
      
      </div>
      <div className="ResCard-Container flex flex-wrap">
        {filteredRestarunts.map((res, index) => (
         <Link to={'/RestaruntMenu/'+ res.info.id }> 
         {
         res.info.name.includes('Bavarchi')?<PromotedRestaruntCard restarunts={res.info} /> :<RestaurantCardComponent key={index} restarunts={res.info} /> 
         }
         
        </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
