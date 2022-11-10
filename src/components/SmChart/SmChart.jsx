import React, { useEffect, useState } from "react";
import "./SmChart.css";
import { BsFillPlayFill } from "react-icons/bs";
import { musicData, MusicCountryData } from "../../constants/data";
import { useContext } from "react";
import { IdContext } from "../../constants/ContextMusicApi.js";
import Fade from 'react-reveal/Fade';
import { useLocation } from "react-router-dom";
const SmChart = () => {
    let location = useLocation()

    const { changeContextID } = useContext(IdContext);
    const [getTopChart, setTopChart] = useState();

    let showplay = (e) => {
        document.querySelector(".music-play").classList.remove("remove");
        document.querySelector(".music-play").classList.add("show");

        // check and change contextID
        if (e.target.tagName === "svg") {
            changeContextID(e.target.parentElement.parentElement.id);
        }
        if (e.target.tagName === "path") {
            changeContextID(
                e.target.parentElement.parentElement.parentElement.id
            );
        }
        if (e.target.tagName === "SPAN") {
            changeContextID(e.target.parentElement.id);
        }
    };
    // ===============
    let dataShow = async () => {



        if (location.pathname === "/yourCountry") {
            setTopChart(await MusicCountryData.slice(0, 5))
        }
        else {
            setTopChart(await musicData.slice(0, 5))
        }
    }

    useEffect(() => {
        dataShow()
    }, [location.pathname]);
    return (
        <div className="sm-chart">
            <div className="title-box">
                <h4>top charts</h4>
                <span>see more</span>
            </div>

            {getTopChart
                ? getTopChart.map((chart, i) => {
                    return (
                        <Fade bottom key={chart.key}
                        >
                            <div
                                className="box-chart-music"
                                id={chart.key}
                            >
                                <div className="box-info">
                                    <div className="box-description">
                                        <span>{i + 1}.</span>
                                        <div className="box-img">
                                            <img
                                                src={chart.share.image}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h5> {chart.title} </h5>
                                            <h6>{chart.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="play"
                                    onClick={(e) => showplay(e)}
                                >
                                    <BsFillPlayFill
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            showplay(e);
                                        }}
                                    />
                                </span>
                            </div>
                        </Fade>
                    );
                })
                : null}
        </div>
    );
};

export default SmChart;
