import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { useState } from "react";
// / or less ideally
import { Button } from 'react-bootstrap';
import axios from "axios"

function Navbar() {
  const { user } = useContext(AuthContext);


  console.log("Navbar", user);



function logOut() {
  localStorage.removeItem('username')
  localStorage.removeItem('token')
navigate("/login")
}


const navigate=useNavigate()

// const Navbar = () => {

//   const { user } = useContext(AuthContext);


//   console.log("Navbar", user);







  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">RoomQuik</span>
        </Link>   {/* if there is user show his username otherwise show this div.  */}
        {user ?
        
        <div  class="dropdown" id="ff2">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            {user.username}
        </button>
        <ul class="dropdown-menu btn-dark" aria-labelledby="dropdownMenuButton1">
            <li><a  className="dropdown-item" onClick={logOut}  routerLink="" id="ssw">Logout</a></li>
        </ul>
    </div> : (
      <div className="navItems">
        <button  onClick={() => navigate('/register')} className="navButton">Register</button>
        <button onClick={() => navigate('/login')} className="navButton" >Login</button>
      </div>
        )}
    </div>
    </div >
  )
}

export default Navbar

// {user ? (<span>{user.username}</span> ): (<div className="navItems">
// <button className="navButton">Register</button>
// <button className="navButton">Login</button>
// </div>)}