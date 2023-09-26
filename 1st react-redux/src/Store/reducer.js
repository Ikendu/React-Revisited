const initialState = {
    message: "SubSribe to Younglife"
}
const reducer = (state = initialState, action) => {
    let newstate = {...state}

    if (action.type === "message type"){
        newstate.message = "Thank you for subscribing"
    }
}
export default reducer 