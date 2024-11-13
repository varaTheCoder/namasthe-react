import React from "react";
import ReactDOM from "react-dom/client";

// heading = React.createElement('h1', {
//     id: 'heading'
// }, 'Welcome Hello')

const Title =  () => {
    return <h1 id='heading' className="test"> React Title componenent</h1>
}


root = ReactDOM.createRoot(document.getElementById('root'))

const JSXheading = (<h1 id='heading' className="test">
     Welcome to raect</h1>);
root.render(JSXheading); 

//Composite Component
const HeadingComponent =  () => {
    return <h1 id='heading' className="test"> React Functional componenent 
    <Title/>
    </h1>
}

root.render(<HeadingComponent/>)
