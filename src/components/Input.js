import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import Movies from "./Movies";
const Input = () => {
  const { getMovies, state } = useContext(Context);
  const [inpValue, setInpValue] = useState(null);
  const [dataCheck, setDataCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(false);
    setDataCheck(false);
    if (inpValue) {
      setLoading(true);
      await getMovies(inpValue);
      setDataCheck(true);
      setInpValue("");
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-md-8 mx-auto">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Film Ara..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">
                Ara
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {dataCheck ? (
            <Movies />
          ) : loading ? (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="lead text-center"> Yükleniyor...</h1>
              <div className="spinner-border" role="status"></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Input;
