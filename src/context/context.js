import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    movies: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("contextMovie"))) {
      localStorage.setItem("contextMovie", JSON.stringify([]));
    }
  }, []);

  const getMovies = async (keyword) => {
    await axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b13dff4&s=${keyword}`)
      .then((movieData) => {
        console.log(movieData);
        let movies = movieData.data.Search;
        if (movies) {
          console.log("if");
          console.log(movieData);
          localStorage.setItem("contextMovie", JSON.stringify(movies));
          setState({
            ...state,
            movies: movies,
          });
        } else {
          console.log("else");
          localStorage.setItem("contextMovie", JSON.stringify([]));
          setState({
            ...state,
            movies: [],
          });
        }
      });
  };
  return (
    <Context.Provider value={{ state, getMovies }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
