import { useParams } from "react-router-dom";

const RestaruntMenu = () => {
  let params = useParams();

  let resName = params.id;

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
