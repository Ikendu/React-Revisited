const { useEffect, useState } = require("react");

const NewComp = (props) => {
    let [count, setCount] = useState(props.count)
    
    useEffect(() => {
        console.log("Who is calling me")
    }, [])    
    useEffect(() => {
        console.log("A change has occured")
    }, [count]) 

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
            <button onClick={()=>setCount(count - 1)}>Decrease</button>
            <button onClick={()=>setCount(props.count)}>Return</button>
        </div>
    )
}
NewComp.defaultProps = {
    count: 0
}

export default NewComp