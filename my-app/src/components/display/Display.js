import { useState } from "react";
import Button from "../button/Button";
import './style.css';

const Display = () => {
    const [light, setLight] = useState(true);
    const [temperature, setTemperature] = useState("22");
    const brightness = light ? "light" : "dark";

    const setLightHandler = (data) => {
        setLight(data);
    }

    const setTemperatureHandler = (data) => {
        setTemperature(data);
    }

    return(
        <>
            <div className= {`room ${brightness}`}>
                <div>
                    Room is {brightness}.
                    Room temperature is {temperature} Celsius. 
                </div>
                <div className="button-container">
                    <Button text="ON" setLight={setLightHandler} lightData={light} />
                    <Button text="OFF" setLight={setLightHandler} lightData={light} />
                    <Button text="+" setTemperatureHigh={setTemperatureHandler} temperatureData={temperature} />
                    <Button text="-" setTemperatureLow={setTemperatureHandler} temperatureData={temperature} />
                </div>
            </div>
            
        </>
        
    );
}

export default Display;