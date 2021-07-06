import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider from "./context/context";
import Input from "./components/Input";
import Movie from "./components/Movie";
import Movies from "./components/Movies";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Input} />
            <Route path="/movies" component={Movies} />
            <Route path="/:imdbID" component={Movie} />
          </Switch>
        </Router>
      </ContextProvider>
    </>
  );
};

export default App;
