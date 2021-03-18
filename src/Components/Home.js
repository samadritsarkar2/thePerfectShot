import React from "react";
import App from "../App";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";



const Home = () => {


    return (
        <div className="container-fluid mt-2">
            <Nav />
            <Heading />
            {/* <p className="text-center" >Homepage</p> */}

            <App  />
            <Footer />
        </div>
    )

}

export default Home;