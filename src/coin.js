import React from 'react';
import'./coin.css';

const Coin = ({image, coiname, symbol, price, volume, priceChange, highPrice, lowPrice, marketCap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{ coiname }</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price.toLocaleString()}</p>
                    <p className="coin-volume">Rs.{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-high">Rs.{highPrice.toLocaleString()}</p>
                    <p className="coin-low">Rs.{lowPrice.toLocaleString()}</p>
                    <p className="coin-marketcap">
                        Mkt Cap: Rs.{marketCap.toLocaleString()}
                    </p>
                </div>  
            </div>         
        </div>
    );
};

export default Coin;
