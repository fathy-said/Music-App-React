import React from "react";
import { Navbar, AllTop, DiscoverContainer } from "../components";

const HomePage = () => {
    return (
        <div className="home-page row  flex-column-reverse flex-md-row">
            <Navbar />
            <DiscoverContainer />
            <AllTop />
        </div>
    );
};

export default HomePage;
