import React, { useState } from "react";
import "../assets/search.css";
import {ReactComponent as Logo} from "../assets/search-svgrepo-com.svg";
import {searchUnsplash} from "../Api/unsplashApi";
import { Link } from "react-router-dom";


const Search = () => {

    const [search, setSearch] = useState("");
    
    const handleSubmit = () => {
        
    }

    return (
        <div className="">
            <div className="search-wrapper">
             <input 
                className="input-box"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
             /> 
             <Link
                to={{
                    pathname : '/search',
                    query : {
                        search
                    }
                }}
             >
            <Logo className="search-logo" onClick={handleSubmit} />
            </Link>
            </div>
            
        </div>
    )
}

export default Search;