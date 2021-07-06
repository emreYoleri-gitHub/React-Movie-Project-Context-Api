import React, { useState, useEffect } from "react";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let movieID = props.match.url.slice(1);
    let movie = JSON.parse(localStorage.getItem("contextMovie")).find(
      (movie) => movie.imdbID === movieID
    );
    setMovie(movie);
  }, [props]);
  return (
    <div
      className="mx-auto text-center mt-2 rounded-3 p-3"
      style={{
        background: "#B7D7D8",
        width: "20rem",
        boxSizing: "content-box",
      }}
    >
      <h1 className="mt-2 mb-3">{movie.Title}</h1>
      <img
        src={movie.Poster}
        alt={movie.Title}
        height="350"
        className="rounded-3"
      />

      <p className="mt-2">Type : {movie.Type}</p>
      <p className="mt-2">Year : {movie.Year}</p>
    </div>
  );
};

export default Movie;
