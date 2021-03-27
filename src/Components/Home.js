import React from "react";
import App from "../App";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";
import Search from "./Search";



const Home = () => {


    return (
        <div className="container-fluid mt-2">
            <Nav />
            <Search />
            <Heading />
          

            <App  />
            <Footer />
        </div>
    )

}

export default Home;