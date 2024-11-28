import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {

    const [btnName, setbtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (<div className='header'>
         <div className="logo-container">
             <img src={logo_url} id='logo'/>
         </div>
        <div className="nav-items">
         <ul>
         <li className="nav-item">
         { onlineStatus ? <span>💚</span> : <span> 🧡</span> }
         </li>
         <li className="nav-item">
          <Link to='/'>Home</Link>
         </li>
         <li className="nav-item">
         <Link to='/about'> About Us</Link>
         </li>
         <li className="nav-item">
         <Link to='/contact'> Contact Us</Link></li>
         <li className="nav-item">Cart</li>
         <li><button className="btn_login" onClick={() => {
           btnName == 'Login' ? setbtnName('Logout') :  setbtnName('Login');
         }}> { btnName} </button></li>
         </ul>
        </div>
     </div>);
 }

 export default HeaderComponent;