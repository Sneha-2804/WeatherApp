import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState(
        {
            city : "Wonderland",
            feelsLike : 20.88,
            temp : 21.05,
            tempMax : 21.05,
            tempMin : 21.05,
            humidity : 64,
            weather : "haze",
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style = {{textAlign : "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
};