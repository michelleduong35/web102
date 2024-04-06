import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const [data, setData] = useState(null);

const WeatherInfo = ({date,temp, humidity}) => {
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
              `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
                API_KEY
            );
          
            const json = await response.json();
            setPrice(json);
          };
    }, [date]);

    return (
        <div>
          {data ? ( // rendering only if API call actually returned us data
            
          ) : null}
          
        </div>
    );
}

export default WeatherInfo