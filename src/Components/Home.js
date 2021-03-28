import React from "react";
import App from "../App";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";
import Search from "./Search";
import "../assets/search.css";


const Home = () => {


    return (
        <div className="container-fluid mt-2">
            <Nav />
            <div className=" row search-area" >
            <Search />
            </div>
         
            <Heading /> 
            <App fetch="Random" />
            <Footer />
        </div>
    )

}

export default Home;