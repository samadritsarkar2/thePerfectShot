import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {

    return (
        <div>
            <div className="container">
                <div className="row text-center ">
                    <Link to="/random">
                    <h3 className="display-4">Checkout Some Random Images</h3>
                    </Link>
                </div>
                
            </div>
        </div>
    )

}

export default Heading;