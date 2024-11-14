import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";


/*
AppComponent 
Header -> Logo & links
Body -> 
Search
Restarent cards - Restarnt card
Footer ->  copy right and link
*/ 






const AppLayout = () => {
   return <div className='app'>
        <HeaderComponent/>
        <BodyComponent/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
