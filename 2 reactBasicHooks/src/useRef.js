import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [input, setInput] = useState("")

    let preValue = useRef("")

    useEffect(() => {
        preValue.current = input
    }, [input])
    
    return (
        <div>
            <h2>Use Ref</h2>
            <input type="text" onChange={e=>setInput(e.target.value)} value={input} />
            <h2>current update</h2>
            <h3>{input}</h3>
            <h2>Previous value</h2>
            <h3>{preValue.current}</h3>
        </div>
    )
}
export default UseRef