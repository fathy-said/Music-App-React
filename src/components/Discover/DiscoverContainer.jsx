import React from "react";
import "./DiscoverContainer.css";
import { Search, DiscoverTitle, DiscoverBox } from "../index";
const DiscoverContainer = ({ Data }) => {
    return (
        <div className="discover-container col-lg-6 col-xl-7">
            <Search />
            <DiscoverTitle Data={Data} />
            <DiscoverBox Data={Data} />
        </div>
    );
};

export default DiscoverContainer;
