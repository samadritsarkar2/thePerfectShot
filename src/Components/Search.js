import React, { useState } from "react";
import "../assets/search.css"
const Search = () => {

    const [search, setSearch] = useState("")

    return (
        <div className="container">
            <div className="search-wrapper">
             <input 
                className="input-box"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
             /> 
            </div>
            
        </div>
    )
}

export default Search;