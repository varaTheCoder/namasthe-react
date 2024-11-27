import React from "react";
//Class based Component
class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 0,
            count2 : 2
        }
    }
    
render() {
     const {name, location, contact} = this.props; //Object destructring
    return ( 
        <div className="user-card">
            <h1>Count: {this.state.count} </h1> 
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Increment</button>
            <h3>Name : {name}</h3>
            <h4>Location : {location}</h4>
            <h5>Contact: {contact} </h5>
        </div>
    )
}
}

export default UserClass;