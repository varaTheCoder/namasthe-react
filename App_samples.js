import React from "react";
import ReactDOM from "react-dom/client";


const Title =  () => {
    return <h1 id='heading' className="test"> React Title componenent</h1>
}


root = ReactDOM.createRoot(document.getElementById('root'))

const JSXheading = (<h1 id='heading' className="test">
     Welcome to raect</h1>);
root.render(JSXheading); 

const number = 10000;

const ele = <span>React Element</span>
const title = <span>React Element 1 {ele}</span>


//Composite Component
const HeadingComponent =  () => {
    return <h1 id='heading' className="test"> React Functional componenent  {number}
    {title}
    <Title/>
    </h1>
}

//  ways to calling function a function 

// <Title/>
// <Title></Title>
// {Title()}

const HeadingComponent2 =  () => {
    return <h1 id='heading' className="test"> React Functional componenent  {number}
    {title}
    <HeadingComponent></HeadingComponent>
    </h1>
}

root.render(<HeadingComponent/>)



