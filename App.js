import React from "react";
import ReactDOM from "react-dom/client"


/*
AppComponent 
Header -> Logo & links
Body -> Restarent cards - Restarnt card
Footer ->  copy right and link
*/ 

const HeaderComponent = () => {
   return (<div className='header'>
        <div className="logo-container">
            <img src='https://play-lh.googleusercontent.com/ebAZ9dy07ZQ5-ahLTQtEPpvWJ5L1hwZGQo7S1qCJNNzXQ9esyqAJIoFbUQcgRgfzTA=w240-h480-rw'/>
        </div>
       <div className="nav-items">
        <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact US</li>
        <li className="nav-item">Cart</li>
        </ul>
       </div>
    </div>);
}

const AppLayout = () => {
   return <div className='app'>
        <HeaderComponent/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
