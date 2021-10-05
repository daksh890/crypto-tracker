import React, {useEffect, useState} from "react";
import axios from 'axios';
import Coin from "./coin";
import "./default.css";

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')
  
    useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
    .then(res =>{
    setCoins(res.data);
    console.log(res.data);
    }).catch(error => console.log(error))
  },[coins])

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search"
          className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          coiname={coin.name} 
          symbol={coin.symbol} 
          image={coin.image}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          highPrice={coin.high_24h}
          lowPrice={coin.low_24h}
          marketCap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;
