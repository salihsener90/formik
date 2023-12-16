import { useEffect,useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";

const HomeController = () => {
  const [coins, setCoins ] = useState([]);
  useEffect(() => {
    axios
      .get ('/assets')
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return <HomeView />;
};

export default HomeController;
