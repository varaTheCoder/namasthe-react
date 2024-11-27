import React from "react";
//Class based Component
class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }
render() {
     const {name, location, contact} = this.props; //Object destructring
    return ( 
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h4>Location : {location}</h4>
            <h5>Contact: {contact} </h5>
        </div>
    )
}
}

export default UserClass;