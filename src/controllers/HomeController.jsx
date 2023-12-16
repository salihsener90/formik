import { useEffect,useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";



const HomeController = () => {
  const [coins, setCoins ] = useState([]);
  useEffect(() => {
    axios
      .get ("/assets")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(coins)
  return <HomeView coins={coins} />;
};

export default HomeController;
