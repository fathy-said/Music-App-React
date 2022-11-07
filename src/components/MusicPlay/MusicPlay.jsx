import React from "react";
import od from "../../assets/‫نجاة_الصغيرة_-_لا_تكذبي‬(128k).m4a";
import { CgClose } from "react-icons/cg";
import "./MusicPlay.css";
const MusicPlay = () => {
    let removeMusicPlay = (e) => {
        // console.log(e.target.parentElement.parentElement.classList);
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

    return (
        <>
            <div className="music-play remove">
                <div className="box-img">
                    <img
                        src="https://m5.paperblog.com/i/39/393846/2012-in-review-L-ambXNa.png"
                        alt=""
                    />
                    <div className="title">
                        <h5>lonely</h5>
                        <h6>lonely</h6>
                    </div>
                </div>
                <audio controls>
                    <source src={od} type="audio/mpeg" />
                </audio>
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
    );
};

export default MusicPlay;
