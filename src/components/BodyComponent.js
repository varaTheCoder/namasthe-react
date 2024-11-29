import { RestaurantCardComponent } from "./RestaurantComponent";
//import { restaurants } from "../utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [listofRestarunts, setListOfRestarunts] = useState([]);
  const [filteredRestarunts, setfilteredRestarunts] = useState([]);
  const [searchtext, setsearchText] = useState ("");
  
  useEffect(()=>{
    fetchData();
  },

[]);

const fetchData = async () => {
  const data = await fetch(
    "https://mocki.io/v1/78bbf66f-af48-48f7-97a0-8e54eeeea26e"
  );
  //  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.509078&lng=78.3001221&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json();
  console.log(json);
  setListOfRestarunts(json);
  setfilteredRestarunts(json);
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
                res.resname.toLowerCase().includes(searchtext.toLowerCase())
            )

            setfilteredRestarunts(filteredRestarunts)
          }
          }>Search</button>
        </div>
        <div className="m-4 p-4 ">  <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = filteredRestarunts.filter(
              (res) => res.rating > 4.6
            );
            setfilteredRestarunts(filteredList);
          }}
        >
          Top Rated Restaurents
        </button></div>
      
      </div>
      <div className="ResCard-Container flex flex-wrap">
        {filteredRestarunts.map((res, index) => (
         <Link to={'/RestaruntMenu/'+res.resname}> <RestaurantCardComponent key={index} restarunts={res} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
