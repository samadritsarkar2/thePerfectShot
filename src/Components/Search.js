import React, { useState } from "react";
import "../assets/search.css";
import {ReactComponent as Logo} from "../assets/search-svgrepo-com.svg"
const Search = () => {

    const [search, setSearch] = useState("");
    
    const handleSubmit = () => {
        let doesNothing;
    }

    return (
        <div className="container">
            <div className="search-wrapper">
             <input 
                className="input-box"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
             /> 
            <Logo className="search-logo" onClick={handleSubmit} />
            </div>
            
        </div>
    )
}

export default Search;