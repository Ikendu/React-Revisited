import { useReducer } from "react";

const LearnReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_NODE' : return action.notes;
        default : return state
    }
}
const Reduce = () => {
    let [notes, dispatch] = useReducer(LearnReducer, ['data','data1', 'data2', 'data3'])
//displaying initial data
    return (
        <div>
            <p>------------------------------------------</p>
            <h2>Notes</h2>
            {notes.map(item => <p key={item}>{item}</p>)}
        </div>
    )
}
export default Reduce