import react from "react";
import logo from "../assets/Unsplash_Symbol.png";   


const NavI = () => {


    return (
        <div className="container">
            
            <div className="header--class">
                <span className="img-logo-wrapper">
                     <img src={logo} className="img-logo" />
                </span>
                
                <h1>Image Search App</h1>
            </div>
           
        </div>
    )

}

export default NavI;