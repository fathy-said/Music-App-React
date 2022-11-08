import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./about";
import { HomePage } from "./index";
import { Navbar, AllTop } from "../components";

const AllPages = () => {
    return (
        <div className="page row  flex-column-reverse flex-lg-row">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/said" element={<About />} />
                </Routes>
                <AllTop />
            </BrowserRouter>
        </div>
    );
};

export default AllPages;
