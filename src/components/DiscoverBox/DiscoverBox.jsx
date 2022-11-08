import React from "react";
import "./DiscoverBox.css";
import { MusicBox } from "../index";
import MusicPlay from "../MusicPlay/MusicPlay";
import { musicData } from "../../constants/data";
const DiscoverBox = () => {
    return (
        <div className="discover-box ">
            {musicData ? (
                musicData.map((music) => {
                    return (
                        <MusicBox
                            Img={music.share.image}
                            Title={music.title}
                            subtitle={music.subtitle}
                            key={music.key}
                            Id={music.key}
                        />
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
            <MusicPlay />
        </div>
    );
};

export default DiscoverBox;
