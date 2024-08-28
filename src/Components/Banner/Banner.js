import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_Key, Img_Url } from "../../constants/constants";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`movie/now_playing?api_key=${API_Key}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[1]);
        // console.log(`Image URL: ${Img_Url + movie.backdrop_path}`);

        setMovie(response.data.results[6]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie && movie.backdrop_path  ? Img_Url + movie.backdrop_path : ""})`,
      }}
    >
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>

          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
