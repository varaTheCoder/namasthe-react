import { useEffect } from "react";
//Custom hook to fetch the data (Single responsibility Principle)

const useRestaruntMenu = () => {
    useEffect(() => {
        fetchData();
      });
    
      let fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.509078&lng=78.3001221&restaurantId=11107&catalog_qa=undefined&submitAction=ENTER', {
          mode: 'no-cors',
      })    
      }
      
}

export default useRestaruntMenu;