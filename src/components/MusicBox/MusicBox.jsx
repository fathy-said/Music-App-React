import React from "react";
import "./MusicBox.css";
import { IoPlay } from "react-icons/io5";

import img from "../../assets/cat-01.jpg";

const MusicBox = () => {
    let showplay = (e) => {
        // console.log();

        document.querySelector(".music-play").classList.remove("remove");
        document.querySelector(".music-play").classList.add("show");
    };
    return (
        <>
            <div className="music-box">
                <div className="box-img">
                    <img src={img} alt="" />
                    <span
                        onClick={(e) => {
                            showplay(e);
                        }}
                    >
                        <IoPlay
                            onClick={(e) => {
                                e.stopPropagation();
                                showplay(e);
                            }}
                        />
                    </span>
                </div>
                <h4>under the influence</h4>
                <h6>influence</h6>
            </div>
        </>
    );
};

export default MusicBox;
