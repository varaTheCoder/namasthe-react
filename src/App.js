import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider, useRouteError} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/Error";

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

const appRouter = createBrowserRouter([

    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <ErrorComp/>

    },
    {
        path : '/About',
        element : <About />
    },
    {
        path : '/Contact',
        element : <Contact />
    }

])
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
