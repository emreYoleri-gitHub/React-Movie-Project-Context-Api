import React, { createContext, useState } from "react";
import axios from "axios";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    movies: [],
  };
  const [state, setState] = useState(initialState);

  const getMovies = async (keyword) => {
    await axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b13dff4&s=${keyword}`)
      .then((movieData) => {
        let movies = movieData.data.Search;
        if (movies) {
          setState({
            ...state,
            movies
          });
        } else {
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
