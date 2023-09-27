import React, {useState, useContext, createContext} from 'react';

let userDetails = createContext()
const Main = () => {
    let [details, setDetails] = useState({
        name: 'Ikendu', 
        status: 'Developer', 
        level: 'Jounior', 
        married: true, 
        education: 'Graduate',
        location: 'Nsukka Enugu'
    }) 
    const {name, status, level} = details
    return(
        <div>
            <h2>User Main details</h2>
            <p>User name: {name}</p>
            <p>User Status: {status}</p>
            <p>User level: {level}</p>
            <userDetails.Provider value={details}>            
              <Level1 name={name} status={details.status} />
            </userDetails.Provider>            
        </div>
    )
}

const Level1 = (props) => {
    let context = useContext(userDetails)
    let {location, married} = context
    let {name, status} = props
    return(
        <div>
            <h3>One level Low Context</h3>
            <p>More details on the user</p>            
            <p>User name: {name}</p>
            <p>User status: {location} </p>
            <p>User Marital status: {married? 'Married':'Single'}</p>
            <Level2 name={name} status={status}/>
        </div>
    )
}
const Level2 = (props) => {
    let context = useContext(userDetails) 
    return(
        <div>
            <h3>More investigation on the user</h3>
            <p>User name: {props.name}</p>
            <p>User status: {props.status}</p>
            <p>Education background: {context.education}</p>            
        </div>
    )
}
export default Main