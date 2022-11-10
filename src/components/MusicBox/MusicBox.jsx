import React from "react";
import "./MusicBox.css";
import { IoPlay } from "react-icons/io5";
import { useContext } from "react";
import { IdContext } from "../../constants/ContextMusicApi.js";
import { Link } from "react-router-dom";

const MusicBox = ({ Img, Title, subtitle, Id }) => {
    const { changeContextID } = useContext(IdContext);

    let showplay = (e) => {
        document.querySelector(".music-play").classList.remove("remove");
        document.querySelector(".music-play").classList.add("show");
        changeContextID(Id);
    };
    return (
        <>
            <div className="music-box" id={Id}>
                <div className="box-img">
                    <img src={Img} alt="" />
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
                <Link to={"/detail/" + Id}>
                    <h4>{Title}</h4>
                </Link>
                <h6>{subtitle}</h6>
            </div>
        </>
    );
};

export default MusicBox;
