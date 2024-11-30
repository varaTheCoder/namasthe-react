import { useEffect } from "react";
import { resMenu } from "./mockRestaruntMenu";
//Custom hook to fetch the data (Single responsibility Principle)

const useRestaruntMenu = (props) => {
    let {resId} = props;
    useEffect(() => {
        fetchData();
      });
    
      let fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.509078&lng=78.3001221&restaurantId='+resId, {
          mode: 'no-cors',
      })    
      }

      return resMenu;
      
}

export default useRestaruntMenu;