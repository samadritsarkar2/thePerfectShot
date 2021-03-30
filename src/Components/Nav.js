import react from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Unsplash_Symbol.png";   


const NavI = () => {


    return (
        <div className="container mt-2">
            
            <div className="header--class">
                <Link to="/">
                <span className="img-logo-wrapper">
                     <img src={logo} className="img-logo" />
                </span>
                </Link>
                
                <h1>Image Search App</h1>
            </div>
           
        </div>
    )

}

export default NavI;