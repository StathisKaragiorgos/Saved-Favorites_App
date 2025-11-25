import { Link,NavLink } from "react-router-dom"
import React from "react"
import "./navBar.css"

export default function Navbar(){
    return(
        <nav className="nav">
            <Link to="/homepage" className="home">Home</Link>
            <ul>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/music">Music</Link></li>
            </ul>
        </nav>
    )
} 