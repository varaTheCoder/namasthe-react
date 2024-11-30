import React, { lazy, Suspense, fallback } from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider, useRouteError} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaruntMenu from "./components/RestaruntMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

//Lazy loading and code splitting

const Grocery = React.lazy(() => import('./components/Grocery'));

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
    <Provider store={appStore} >
        <HeaderComponent/>
        <Outlet/>
        </Provider>
        {/* <BodyComponent/> */}
    </div>
}

const appRouter = createBrowserRouter([

    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <ErrorComp/>,
        children : [
            {
                path : '/',
                element : <BodyComponent />
            },
            {
                path : '/About',
                element : <About />
            },
            {
                path : '/Contact',
                element : <Contact />
            },
            {
                path : '/Grocery',
                element : <Suspense fallback={<div>Loading...</div>}>
                <Grocery />
              </Suspense>
            },
            {
                path : '/RestaruntMenu/:id',
                element : <RestaruntMenu />
            },
            {
                path : '/Cart',
                element : <Cart />
            }
        ]

    },
   

])
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
