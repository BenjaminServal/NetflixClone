import React, { useState, useEffect } from "react";
import axios from 'axios';

const Row = ({title, fetchUrl, isPoster}) => {
const [movies, setMovies] = useState([])

const baseUrl = "https://image.tmdb.org/t/p/original"


useEffect(() => {
  async function fetchMovies () {
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
  }
 fetchMovies();
}, [fetchUrl])

console.log(movies)

  return (
    <div className="Row">
      <div className="title">
      <h1>{title}</h1>
      </div>
      <div className="row-images">
        {movies.map((movie) => (
          <div key={movie.id}>
          {isPoster? (
            <img 
              src={`${baseUrl}${movie.poster_path}`}
              alt="screen"
              className="image"
            />
          ) : (
            <img 
            src={`${baseUrl}${movie.backdrop_path}`}
            alt="screen"
            className="image"

          />
          )}
          </div>
  ))}
      </div>
    </div>
  );
};

export default Row;
