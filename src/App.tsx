import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherInMyCity from './WeatherInMyCity';
import axios from "axios";
import WeatherInOtherCity from './WeatherInOtherCity';

function App() {

    const [newDate, setNewDate] = useState(new Date())
    const [currentInfo, setCurrentInfo] = useState<any>({})
    const [country, setCountry] = useState<any>({})

    const time = newDate.toLocaleTimeString()
    const date = newDate.toDateString()

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=53.9&lon=27.57&exclude={part}&units=metric&appid=4a2a2c14a12306d7d9842b80437ab841")
            .then(res => {
                setCountry(res.data)
                setCurrentInfo(res.data.current)
            })
        setInterval(() => {
            setNewDate(new Date())
        }, 1000)
    }, [])

    return (
        <div className="App">
            <div className={'app_wrapper'}>
                <WeatherInMyCity country={country} currentInfo={currentInfo} time={time} date={date}/>
                <WeatherInOtherCity/>
            </div>
        </div>
    );
}

export default App;
