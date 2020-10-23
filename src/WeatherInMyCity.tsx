import React from "react";
import './App.css';

type WeatherInMyCityPropsType = {
    country: any
    time: string
    currentInfo: any
    date: string
}

const WeatherInMyCity = (props: WeatherInMyCityPropsType) => {


    return (
        <div className={"app_my_temp_inform"}>

            <div className={'app_my_country'}>
                <h1>{props.country.timezone}</h1>
            </div>

            <div className={'app_my_weather'}>
                <div className={'app_my_time'}>
                    <span>{props.time}</span><br/>
                    <span> {props.date}</span>
                </div>
                <div className={'app_my_temp'}>
                    <span>{props.currentInfo.temp}°с</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherInMyCity