import React from "react";
import "./SmArtist.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const SmArtist = () => {
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
                    <SplideSlide>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
};

export default SmArtist;
