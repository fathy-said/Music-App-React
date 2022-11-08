import React from "react";
import "./AllTop.css";
import { SmArtist, SmChart } from "../index";
const AllTop = () => {
    return (
        <div className="all-top col-lg-4 col-xl-3  row ">
            <div className="all col-lg-4 col-xl-3 ">
                <SmChart />
                <SmArtist />
            </div>
        </div>
    );
};

export default AllTop;
