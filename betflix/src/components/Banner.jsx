import React, { useState, useEffect } from "react";
import requests from "../api/MovieApi";
import axios from "axios";
import { FaRegPlayCircle,  } from "react-icons/fa";
import {  AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMoviesTrending);
      setMoviesTrending(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(moviesTrending);

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${moviesTrending.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  };
  return (
    <div className="Banner" style={bannerStyle}>
      <div className="text">
        <div className="title">
          <h2>
            {moviesTrending.title ||
              moviesTrending.name ||
              moviesTrending.original_title}
          </h2>
        </div>
        <div className="info">
          <p>{moviesTrending.overview}</p>
        </div>
        <div className="callToAction">
        <div className="button">
          <div className="icon">
            <FaRegPlayCircle />
          </div>
          <button className="play"> Lecture </button>
        </div>
        <div className="button">
          <div className="icon">
            <AiOutlineInfoCircle />
          </div>
          <button className="play">Plus d'infos</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
