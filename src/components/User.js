import { useState } from "react";

let User = (props) => {
    let count = useState(0)
    return ( 
        <div className="user-card">
            <h1>Count: {count} </h1>
            <h3>Name : {props.name}</h3>
            <h4>Location : {props.location}</h4>
            <h5>Contact: {props.contact} </h5>
        </div>
    )
}
export default User;