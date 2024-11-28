import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../utils/useRestaruntMenu"

const RestaruntMenu = () => {
  let params = useParams();

  let resName = params.id;

  let data = useRestaruntMenu(resName);

  console.log(resName);
  return (
    <>
    <div> Menu </div>
    <h1> {resName} </h1>
    <div>Items</div>
    </>
  );
  

};
export default RestaruntMenu;
