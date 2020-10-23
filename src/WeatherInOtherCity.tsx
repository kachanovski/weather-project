import React, {ChangeEvent, useState, useEffect} from "react";
import './App.css';
import axios from 'axios'
import searchIcon from './images/search.png'


const WeatherInOtherCity = () => {

    const [value, setValue] = useState<string>('')
    const [city, setCity] = useState<string>("Minsk")
    const [mainWeather, setMainWeather] = useState<any>({})
    const [icon, setIcon] = useState<any>({})
    const [wind, setWind] = useState<string>()
    const [error, setError] = useState<string | null>(null)

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a2a2c14a12306d7d9842b80437ab841`)
            .then(res => {
                setMainWeather(res.data.main)
                setIcon(res.data.weather[0])
                setWind(res.data.wind.speed)
            })
            .catch(() => {
                setError("Incorrect Value")
            })
    }, [city])


    const searchWeather = () => {
        if (value.trim() !== '') {
            setCity(value)
            setError(null)
        } else {
            setError("Change value")
        }
        setValue('')
    }

    return (
        <div className={"app_other_temp"}>
            <div className={'app_weather_picture'}>


            </div>
            <div className={'app_search_city'}>
                <input value={value} onChange={changeValue} placeholder={'Search any city'}/>
                <img alt={'search'} src={searchIcon} onClick={searchWeather}/>
            </div>
            {error
                ? <div className={'error'}>{error}</div>
                : <div className={"app_weather_target_city"}>
                    {city}
                    <img alt={'weather'} src={`http://openweathermap.org/img/wn/${icon.icon}.png`}/>
                    <span>{icon.main}</span>
                </div>}
            <div className={'app_city_weather_values'}>
                <div className={'weather_value'}><span>Temperature </span> <span>{mainWeather.temp}</span></div>
                <div className={'weather_value'}><span>Humidity </span> <span>{mainWeather.humidity}</span></div>
                <div className={'weather_value'}><span>Pressure </span> <span>{mainWeather.pressure}</span></div>
                <div className={'weather_value'}><span>Wild Speed </span> <span>{wind} m/c</span></div>
            </div>
        </div>
    )
}

export default WeatherInOtherCity