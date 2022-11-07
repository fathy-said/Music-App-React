import React from "react";
import "./DiscoverContainer.css";
import { Search, DiscoverTitle, DiscoverBox } from "../index";
const DiscoverContainer = () => {
    return (
        <div className="discover-container col-md-6 col-lg-7">
            <Search />
            <DiscoverTitle />
            <DiscoverBox />
        </div>
    );
};

export default DiscoverContainer;
