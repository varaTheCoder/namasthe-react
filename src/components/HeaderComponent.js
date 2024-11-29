import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {

    const [btnName, setbtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (<div className='flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50'>
         <div className="logo-container">
             <img src={logo_url} id='logo' className="w-24"/>
         </div>
        <div className="flex items-center">
         <ul className="flex p-5 m-5">
         <li className="px-4">online Status
         { onlineStatus ? "💚" : "🧡" }
         </li>
         <li className="px-4">
          <Link to='/'>Home</Link>
         </li>
         <li className="px-4">
         <Link to='/about'> About Us</Link>
         </li>
         <li className="px-4">
         <Link to='/contact'> Contact Us</Link></li>
         <li className="px-4">
         <Link to='/grocery'> Grocery </Link></li>
         <li className="px-4">Cart</li>
         <li className="px-4"><button className="btn_login" onClick={() => {
           btnName == 'Login' ? setbtnName('Logout') :  setbtnName('Login');
         }}> { btnName} </button></li>
         </ul>
        </div>
     </div>);
 }

 export default HeaderComponent;