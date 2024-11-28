import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return(
//   <>
//     <div>This is About us page</div>
//     {/* <User name='varalaskhmi' location='Hyderabad' contact='varabtech08' /> */}
//     <UserClass name='varalaskhmi' location='Hyderabad' contact='varabtech08' />
//   </>
//   );
// };

//Chaniging to class component
class About extends React.Component {
    constructor () {
        super();
        console.log('Parent Constructor')

    }

    //used for calling the API's like useffect in functional components
    componentDidMount(){
        console.log('Parent componentDidMount')
    }

    componentWillUnmount(){
        console.log('Parent componentWillUnmount')
    }
    
  render() {
    console.log('Parent Render')
    return (
      <>
        <div>This is About us page</div>
        {/* <User name='varalaskhmi' location='Hyderabad' contact='varabtech08' /> */}
        <UserClass
          name="varalaskhmi1"
          location="Hyderabad"
          contact="varabtech08"
        />

        {/* <UserClass
          name="varalaskhmi2"
          location="Hyderabad"
          contact="varabtech08"
        /> */}
      </>
    );
  }
}

export default About;
