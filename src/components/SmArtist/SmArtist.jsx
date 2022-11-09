import React, { useState } from "react";
import "./SmArtist.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { musicData } from "../../constants/data";
const SmArtist = () => {
    const [getTopArtists, setTopArtists] = useState(musicData.slice(0, 5));
    return (
        <div className="sm-artist">
            <div className="title-box">
                <h4>top Artists</h4>
                <span>see more</span>
            </div>
            <div className="all-img">
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "4rem",
                        type: "loop",
                        focus: "center",
                        breakpoints: {
                            992: {
                                perPage: 4,
                            },
                            640: {
                                perPage: 3,
                            },
                            1450: {
                                perPage: 2,
                            },
                            1700: {
                                perPage: 3,
                            },
                        },
                    }}
                >

                    {
                        getTopArtists ? (getTopArtists.map((artist) => {
                            return (
                                <SplideSlide key={artist.key}>
                                    <div className="box-img">
                                        <img
                                            src={artist.images.background}
                                            alt=""
                                        />
                                    </div>
                                </SplideSlide>

                            )

                        })) : null


                    }


                </Splide>
            </div>
        </div>
    );
};

export default SmArtist;
