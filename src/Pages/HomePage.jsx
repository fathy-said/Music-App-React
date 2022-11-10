import React from "react";
import { Navbar, AllTop, DiscoverContainer } from "../components";
import { musicData } from "../constants/data";

const HomePage = () => {
    return (
        <>
            <DiscoverContainer Data={musicData} />
        </>
    );
};

export default HomePage;
