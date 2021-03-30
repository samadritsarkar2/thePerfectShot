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
            <div className="info-panel">
                <p>
                    Try searching something <span role="img" aria-label="up">👆</span>
                </p>
                <p>
                    Built on React.  Works on <a href="https://api.unsplash.com/" target="_" >Unsplash.com's</a> API
                </p>
                <p>
                   <a href="https://github.com/samadritsarkar2/thePerfectShot" target="_" >View Sourcecode on Github</a>
                </p>
            </div>
        </div>
    )
}

export default Search;