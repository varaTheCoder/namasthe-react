import { logo_url } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {

    const [btnName, setbtnName] = useState('Login');
    return (<div className='header'>
         <div className="logo-container">
             <img src={logo_url} id='logo'/>
         </div>
        <div className="nav-items">
         <ul>
         <li className="nav-item">Home</li>
         <li className="nav-item">About Us</li>
         <li className="nav-item">Contact US</li>
         <li className="nav-item">Cart</li>
         <li><button className="btn_login" onClick={() => {
           btnName == 'Login' ? setbtnName('Logout') :  setbtnName('Login');
         }}> { btnName} </button></li>
         </ul>
        </div>
     </div>);
 }

 export default HeaderComponent;