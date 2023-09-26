import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import Login from "./Login"
const First = () => {
    return(
        <div>
            <h1>Welcome to Younglife Groups</h1>
            <p>here are things we do</p>
            <p><NavLink to="login">Login</NavLink> to continue</p>
        </div>
    )
}
const routs = (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element="<Login/>"/>
        </Routes>
    </BrowserRouter>
)
export default First