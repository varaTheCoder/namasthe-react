import React from "react";
import ReactDOM from "react-dom/client";

heading = React.createElement('h1', {
    id: 'heading'
}, 'Welcome Hello')
root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading) 