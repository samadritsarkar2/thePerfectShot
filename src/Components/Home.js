import React from "react";
import Heading from "./Heading";
import Nav from "./Nav";



const Home = () => {


    return (
        <div className="container-fluid mt-2">
            <Nav />
            <Heading />
            <p className="text-center" >Homepage</p>
        </div>
    )

}

export default Home;