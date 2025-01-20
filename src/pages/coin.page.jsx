import { useParams } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinDetailsComponent from "../components/ui/coins/CoinDetails.Component";
import Spinner from "../components/ui/Spinner.component";

const CoinPage = () => {
  const paramObject = useParams();

  const url = detailsUrl(paramObject.id);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((Response) => {
        setLoading(false);
        console.log("data", Response.data);
        setCoin(Response.data);
      })
      .catch((error) => {
        setError("An error occured");
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : error !== "" ? (
        <h1>{error}</h1>
      ) : (
        <CoinDetailsComponent coin={coin} />
      )}
    </div>
  );
};

export default CoinPage;
