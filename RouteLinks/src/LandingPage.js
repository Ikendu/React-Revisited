import "./App.css"
import React from "react"
import {BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom"
import Login from "./files/Login"
import Register from "./files/Register"
import Profile from "./files/Profile"
import First from "./files/first"



export default class App extends React.Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    )
  }
}

const Header = () => {
  return (
    <header>
      <NavLink to="">Home</NavLink>
      <NavLink to="login">Login</NavLink>
      <Link to="register">Register</Link>
      <Link to="profile">Profile</Link>
      <a href={'https://www.lifella.com.ng'} target="_blank" rel='noreferrer'>Ella Hairs</a>
    </header>
  )
}

const routes = ( 
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/" element={<First/>} exact={true}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter> 
)
