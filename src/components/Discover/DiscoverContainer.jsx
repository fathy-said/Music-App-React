import React from "react";
import "./DiscoverContainer.css";
import { Search, DiscoverTitle, DiscoverBox } from "../index";
const DiscoverContainer = () => {
    return (
        <div className="discover-container col-lg-6 col-xl-7">
            <Search />
            <DiscoverTitle />
            <DiscoverBox />
        </div>
    );
};

export default DiscoverContainer;
