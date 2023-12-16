import millify from "millify";
import {FaBitcoin } from "react-icons/fa";

const HomeView = ({ coins }) => {
  console.log(coins);
  return(
<div className="container-xl mt-5">
    <h4 className="d-flex align-items-center gap-3">
      <FaBitcoin /> 
      <span>Hoş Geldiniz, Coin Listesi</span>
    </h4>
    <p>
      Coin Listesi, dünya genelindeki kripto para birimlerini ve 
      dijital varlıkları takip etmek için mükemmel bir kaynaktır.
    </p>
    <table className="table table-dark table-hover mt-5" >
      <thead>
      <tr>
        <th>#</th>
        <th>coin</th>
        <th>fiyat</th>
        <th>market hacmi</th>
        <th>değişim (24s)</th>
        <th>%değişim (24s)</th>
      </tr> 
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr>
            <td>{coin.rank}</td>
            <td>
              <span>{coin.symbol}</span>
              <span>{coin.name}</span>
            </td>
            <td>{coin.priceUs}</td>
            <td>{coin.marketCapUsd}</td>
            <td>{coin.volumeUsd24Hr}</td>
            <td>{coin.changePercent24Hr}</td>
          </tr>
        ))}
      </tbody>

    </table>
   </div>
  )
  
}

export default HomeView;
