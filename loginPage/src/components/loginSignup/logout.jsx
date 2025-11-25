import { useNavigate } from "react-router-dom";
import "./logout.css";

export default function Logout(){
    const navigate = useNavigate();
        const handleLogout = () =>{
            navigate("/");
        }   
    return(
        <button className="button" onClick={handleLogout}>Logout</button>
    )
}
