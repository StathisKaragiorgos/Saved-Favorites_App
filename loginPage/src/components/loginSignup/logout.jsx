import { useNavigate } from "react-router-dom";
import "./logout.css";

export default function Logout(){

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/");
    }
       
    return(
        <button className="button" onClick={handleLogout}>Logout</button>
    )
}
