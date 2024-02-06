import React from "react";
import { useSelector } from "react-redux";

export const ShowInfo = ({temp, handleSearchPlace}) => {
    const date = new Date();
    const data = useSelector((data) => data.data.data);
    let weather;
    let letter = "C"
    if(temp) {
        weather = Math.round(data?.main?.temp - 272.15);
    } else{
        weather = Math.round(data?.main?.temp - 459.67);
        letter = "F"
    }
    return (
        <div className="left-container">
            <div>
                <div>
                    <button className="btn" onClick={handleSearchPlace}>Search for places</button>
                    <p className="temp">{weather} <sup style={{fontSize: "30px"}}>O</sup>{letter}</p>
                </div>
                <div>
                    <p className="today">Today {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                    <p className="today">{data.name}</p>
                </div>
            </div>
        </div>
        )

}