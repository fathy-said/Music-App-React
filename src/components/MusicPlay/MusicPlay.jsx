import React from "react";
import od from "../../assets/‫نجاة_الصغيرة_-_لا_تكذبي‬(128k).m4a";
import { CgClose } from "react-icons/cg";
import "./MusicPlay.css";
import { useState, useContext, useEffect } from "react";
import { IdContext } from "../../constants/ContextApi";
import { musicData } from "../../constants/data";

const MusicPlay = () => {
    const { getContextID } = useContext(IdContext);
    let [getMusic, setMusic] = useState("");
    let MusicTarget = async () => {
        let res = await musicData.filter((el) => el.key === getContextID);
        setMusic(res);
    };
    useEffect(() => {
        MusicTarget();
    }, [getContextID]);
    // =====
    let removeMusicPlay = (e) => {
        //
        if (
            e.target.parentElement.parentElement.classList.contains(
                "music-play"
            )
        ) {
            e.target.parentElement.parentElement.classList.add("remove");
            e.target.parentElement.parentElement.classList.remove("show");
            e.target.parentElement.parentElement.querySelector("audio");
            // load audio
            e.target.parentElement.parentElement.querySelector(
                "audio"
            ).defaultMuted = true;
            e.target.parentElement.parentElement.querySelector("audio").load();

            // check target == svg
        } else {
            e.target.parentElement.parentElement.parentElement.classList.add(
                "remove"
            );
            e.target.parentElement.parentElement.parentElement.classList.remove(
                "show"
            );
            e.target.parentElement.parentElement.parentElement.querySelector(
                "audio"
            );
            // load audio
            e.target.parentElement.parentElement.parentElement.querySelector(
                "audio"
            ).defaultMuted = true;
            e.target.parentElement.parentElement.parentElement
                .querySelector("audio")
                .load();
        }
    };
    //
    return (
        <>
            <>
                <div className="music-play remove">
                    <div className="box-img">
                        <div className="imgs">
                            <img
                                src={getMusic ? getMusic[0].share.image : ""}
                                alt=""
                            />
                        </div>

                        <div className="title">
                            <h5>{getMusic ? getMusic[0].title : ""}</h5>
                            <h6>{getMusic ? getMusic[0].subtitle : ""}</h6>
                        </div>
                    </div>
                    <audio
                        src={getMusic ? getMusic[0].hub.actions[1].uri : ""}
                        type="audio/x-m4a"
                        controls
                        autoplay="autoplay"
                    ></audio>
                    <span
                        className="close-music"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <CgClose
                            onClick={(e) => {
                                e.stopPropagation();
                                removeMusicPlay(e);
                            }}
                        />
                    </span>
                </div>
            </>
        </>
    );
};

export default MusicPlay;
