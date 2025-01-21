import React, { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner.component";
import axios from "axios";
import { baseUrl } from "../constants/api";
import CoinsComponent from "../components/ui/coins/coins.component";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((Response) => {
        setLoading(false);
        console.log(Response.data);
        setData(Response.data);
      })
      .catch((error) => {
        setError("An error occured");
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>crypto exhchange</h1>
          <h4>a place for crypto trading</h4>
          <h4>do not for risk managment</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {" "}
          {loading ? (
            <Spinner />
          ) : error !== "" ? (
            <h1>{error}</h1>
          ) : (
            <CoinsComponent data={data} />
          )}
        </div>
      </div>

      {/* <Spinner /> */}
    </div>
  );
};

export default HomePage;
