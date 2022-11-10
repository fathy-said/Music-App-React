import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, Country, Artists, Charts, MusicDetail } from "./index";
import { Navbar, AllTop } from "../components";

const AllPages = () => {
    return (
        <div className="page row  flex-column-reverse flex-lg-row">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/yourCountry" element={<Country />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/detail/:type" element={<MusicDetail />} />
                </Routes>
                <AllTop />
            </BrowserRouter>
        </div>
    );
};

export default AllPages;
