import React from "react";
import "./SmChart.css";
import { BsFillPlayFill } from "react-icons/bs";

const SmChart = () => {
    let showplay = (e) => {
        document.querySelector(".music-play").classList.remove("remove");
        document.querySelector(".music-play").classList.add("show");
    };
    return (
        <div className="sm-chart">
            <div className="title-box">
                <h4>top charts</h4>
                <span>see more</span>
            </div>
            <div className="box-chart-music">
                <div className="box-info">
                    <div className="box-description">
                        <span>1.</span>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>

                        <div>
                            <h5>yours</h5>
                            <h6>uin</h6>
                        </div>
                    </div>
                </div>
                <span className="play" onClick={(e) => showplay(e)}>
                    <BsFillPlayFill
                        onClick={(e) => {
                            e.stopPropagation();
                            showplay(e);
                        }}
                    />
                </span>
            </div>
            <div className="box-chart-music">
                <div className="box-info">
                    <div className="box-description">
                        <span>1.</span>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>

                        <div>
                            <h5>yours</h5>
                            <h6>uin</h6>
                        </div>
                    </div>
                </div>
                <span className="play" onClick={(e) => showplay(e)}>
                    <BsFillPlayFill
                        onClick={(e) => {
                            e.stopPropagation();
                            showplay(e);
                        }}
                    />
                </span>
            </div>
            <div className="box-chart-music">
                <div className="box-info">
                    <div className="box-description">
                        <span>1.</span>
                        <div className="box-img">
                            <img
                                src="https://i1.sndcdn.com/avatars-000290424646-nat4bk-t500x500.jpg"
                                alt=""
                            />
                        </div>

                        <div>
                            <h5>yours</h5>
                            <h6>uin</h6>
                        </div>
                    </div>
                </div>
                <span className="play" onClick={(e) => showplay(e)}>
                    <BsFillPlayFill
                        onClick={(e) => {
                            e.stopPropagation();
                            showplay(e);
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default SmChart;
