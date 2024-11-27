import React from "react";
//Class based Component
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log('Child  Constructor');
        this.state = {
           userData : {
            name : 'Test',
            avatar_url : null,
            login : 'Welcome'
           }
        }
    
    }

   async componentDidMount(){
        console.log(this.props.name+' Child componentDidMount');

        let data = await fetch('https://api.github.com/users/varaTheCoder');
        let userInfo = await data.json();
        console.log(userInfo)

        this.setState({userData : userInfo})
    }
    
render() {
    console.log('Child Constructor')
     //const {name, location, contact} = this.props; //Object destructring
      const {name, avatar_url, login } = this.state.userData;
    return ( 
        <div className="user-card">
            <h1>Count: {this.state.count} </h1> 
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Increment</button>
            <h3>Name : {name}</h3>
            <h4>Location : {login}</h4>
            {/* <h5>Contact: {contact} </h5> */}
            <img src={avatar_url} alt='test' ></img>
        </div>
    )
}
}

export default UserClass;