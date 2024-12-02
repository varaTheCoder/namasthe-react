import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../utils/useRestaruntMenu";
import { resMenu } from "../utils/mockRestaruntMenu";
import shimmer from "./ShimmerComponent";
import RestaruntCategory from "./RestaruntCategory";

const RestaruntMenu = () => {
  let params = useParams();

  let resId = params.id;

  let resInfo = useRestaruntMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  console.log(resInfo)
  if (resInfo == null) return <shimmer />;

  const { name, cusines, costForTwoMessage } =
    resInfo[0]?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name} </h1>
      <div className="font-bold">{cusines}</div>
      <div>{costForTwoMessage}</div>
      {categories.map((category, index) => (
        <RestaruntCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaruntMenu;
