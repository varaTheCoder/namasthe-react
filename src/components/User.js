let User = (props) => {
    return ( 
        <div className="user-card">
            <h3>Name : {props.name}</h3>
            <h4>Location : {props.location}</h4>
            <h5>Contact: {props.contact} </h5>
        </div>
    )
}
export default User;