import React from "react";
import "./DiscoverBox.css";
import { MusicBox } from "../index";
import MusicPlay from "../MusicPlay/MusicPlay";
const DiscoverBox = () => {
    return (
        <div className="discover-box ">
            <MusicBox />
            <MusicBox />
            <MusicBox />
            <MusicPlay />
        </div>
    );
};

export default DiscoverBox;
