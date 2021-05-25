import React from "react";
import  "../assets/App.css";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";
import Search from "./Search";
import Random from "./Random";
import "../assets/search.css";


const Home = () => {


    return (
        <div className="container-fluid mt-2">
            <div className=" row search-area" >
            <Search />
            </div>
         
            <Heading /> 
            {/* <App fetch="Random" /> */}
            {/* <Random /> */}
            <Footer />
        </div>
    )

}

export default Home;