import React, { useContext, useState, useEffect } from "react";
import "./DiscoverBox.css";
import { MusicBox } from "../index";
import MusicPlay from "../MusicPlay/MusicPlay";
import { IdContext } from "../../constants/ContextMusicApi";
import Fade from 'react-reveal/Fade';

const DiscoverBox = ({ Data }) => {


    let { getContextSearch } = useContext(IdContext);
    const [getDiscoverBox, setDiscoverBox] = useState([]);

    let getBox = async () => {

        let res = await Data.filter((el) => el.title === getContextSearch);
        if (res.length) {
            setDiscoverBox(await res)
        }
        else {
            let resAll = await Data
            setDiscoverBox(await resAll)


        }

        // if ((getContextSearch === undefined || !(getDiscoverBox.length))) {

        //     let res = await Data
        //     setDiscoverBox(await res)

        // }

        // if (!(getContextSearch === undefined)) {

        //     let res = await Data.filter((el) => el.title === getContextSearch);
        //     if (res.length) {
        //         setDiscoverBox(await res)
        //     }

        // }

    }

    useEffect(() => {

        getBox()
    }, [getContextSearch]);


    return (


        <div className="discover-box ">
            {getDiscoverBox ? (
                getDiscoverBox.map((music) => {
                    return (
                        <Fade bottom key={music.key}
                        >


                            <MusicBox
                                Img={music.share.image}
                                Title={music.title}
                                subtitle={music.subtitle}
                                Id={music.key}
                                key={music.key}
                            />
                        </Fade>
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
            <MusicPlay data={Data} />
        </div>
    );
};

export default DiscoverBox;




