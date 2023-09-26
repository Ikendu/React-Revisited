import { useState } from "react"

const MemoDemo = () => {
    let [count, setCount] = useState(0)
    let [todo, setTodo] = useState([])
    let [text, setText] = useState("add data")
    let [time, setTime] = useState("time")

    
    const updataTodo = (e) => {
        setText(e.target.value)
    }
    const upDate = (e) => {
        setTime(e.target.value)
    }
    const addTodo = () => {
        setTodo(t => [...t, [text,"  ", "by", "  ", time]])
    }
    const increment = () => {
        setCount(c => c + 1)
    }
    const calculate = calculation(count)

    return (
        <div>
            <div>
                <h2>Todo List</h2>
                <h3>Add new: <input type="text" onChange={(updataTodo)}/> Time: <input type="text" onChange={upDate}/></h3> 
                             
                
                
                {todo.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <button onClick={addTodo}>Add task</button>
            <div>
                <h3>Count: {count}</h3>
                <button onClick={increment}>+</button>
                <h2>Calculate</h2>
                {calculate}
            </div>
        </div>
    )    
}
const calculation = (num) => {
    console.log("calculating...")
    for (let i = 0; i < 1000; i++) num += 1
    return num
}

export default MemoDemo