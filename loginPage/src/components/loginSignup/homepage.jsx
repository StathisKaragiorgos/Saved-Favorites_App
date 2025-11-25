import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css"
import Navbar from "./navBar";
import Logout from "./logout";
import welcome from "../loginSignup/assets/welcome.gif"

const Homepage= ()=>{
    return(
        <div className="container_home">
            <Navbar />
            <div>
                <div><h1>Welcome back!</h1></div>
                <p>
This is your personal space for everything you love — your favorite videos, photos, and curated music playlists.
Effortlessly explore your collections, stay organized, and return to the moments that matter most.
Use the navigation bar to move through your media and enjoy a simple, uncluttered experience designed just for you.</p>
            <div className="gif_container">
                <img src={welcome} alt="welcome" />
            </div>
            </div>            
            <div className="logout_container">
            <Logout/>
            </div>
        </div>
    )
}

export default Homepage;