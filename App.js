import React from "react";
import ReactDOM from "react-dom/client"


/*
AppComponent 
Header -> Logo & links
Body -> 
Search
Restarent cards - Restarnt card
Footer ->  copy right and link
*/ 

const HeaderComponent = () => {
   return (<div className='header'>
        <div className="logo-container">
            <img src='https://play-lh.googleusercontent.com/ebAZ9dy07ZQ5-ahLTQtEPpvWJ5L1hwZGQo7S1qCJNNzXQ9esyqAJIoFbUQcgRgfzTA=w240-h480-rw' id='logo'/>
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

const BodyComponent = () => {
    return (
        <div className="body">
            <div>Search</div>
            <div>
                <RestarentComponent/>
            </div>

        </div>
    )
}

const RestarentComponent = () => {
    return (
        <div className="ResCard-Container">
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            <RestarentCardComponent/>
            </div>
    )
}

const RestarentCardComponent = () => {
    return(
        <div className="res-card">
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng' className="res-img"></img>
            <div>Backery World</div>
            <div>Indian</div>
            <div>4.3 star</div>
        </div>
    )
}

const AppLayout = () => {
   return <div className='app'>
        <HeaderComponent/>
        <BodyComponent/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
