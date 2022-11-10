import React, { useEffect, useState } from 'react';
import "./DetailBox.css"
import { TbMenu2 } from "react-icons/tb";
import axios from "axios";
import MusicPlay from "../MusicPlay/MusicPlay";
import { musicData } from '../../constants/data';
const DetailBox = ({ detailId }) => {
  const [getDetail, setDetail] = useState();
  useEffect(() => {

    dataAxios()

  }, [detailId]);
  const options = {
    method: "GET",
    params: { track_id: detailId },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  };

  let dataAxios = async () => {
    let res = await axios.get(
      `https://shazam-core.p.rapidapi.com/v1/tracks/details`,
      options
    );
    setDetail(await res.data)

  };

  let headerActive = (e) => {
    document.querySelector('.header').classList.add("active")

  }

  return (
    <>
      {
        getDetail ? (

          <div className="detail-box col-lg-6 col-xl-7" >
            <div className="detail-header  ">
              <div className="box-img">
                <img src={getDetail.images.coverart} alt="" />
              </div>
              <div className="info">
                <h2>{getDetail.title}</h2>
                <h5>{getDetail.share.subject}</h5>
                <h5>{getDetail.subtitle} </h5>
              </div>


            </div>

            <div className="description-box">
              <h2>Lyrics<span>&#8758;</span></h2>
              <p>
                {
                  getDetail.sections[1].text ? getDetail.sections[1].text : "sorry,no lyrics"}


              </p>
            </div>
            <span className="menu" onClick={(e) => {
              headerActive(e)

            }}>
              <TbMenu2 onClick={(e) => {
                headerActive(e)

              }} />
            </span>
            <div className="detail-footer">
              <div className="box-img">
                <img src={getDetail.sections[0].metapages[0] ? getDetail.sections[0].metapages[0].image : "sorry,"} alt="" />
              </div>
              <div className="info">
                <h2>{getDetail.sections[0].metapages[0] ? getDetail.sections[0].metapages[0].caption : "sorry,"}</h2>
                <h5>{getDetail.share.subject}</h5>
              </div>


            </div>
          </div>
        ) :
          <h2>not found data</h2>

      }
      <MusicPlay data={musicData} />

    </>


  );
}

export default DetailBox;
