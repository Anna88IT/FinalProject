import React from "react";
import { useSelector } from "react-redux";


export const RightSideBar = ({handleChangeTemp}) => {
    const data = useSelector((data) => data.data.data);

    return(
        <div className="right-container">
            <div className="navbar">
                <button onClick={handleChangeTemp} className="temp-change"><sup>o</sup>F</button>
                <button onClick={handleChangeTemp} className="temp-change"><sup>o</sup>C</button>
            </div>
            <p className="right-title">Today's Hilights</p>
            <div className="boxes">
                <div className="box-container">
                    <div className="box">
                        <p>Wind status</p>
                        <p className="data">{data?.wind?.speed} mph</p>
                    </div>
                    <div className="box">
                        <p>Humidity</p>
                        <p className="data">{data?.main?.humidity} %</p>
                        <div className="rang">
                            <div className="rang-color" style={{width: `${data?.main?.humidity}%`}}>                         </div>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                        <p>Visibility</p>
                        <p className="data">{data?.visibility} miles</p>
                    </div>
                    <div className="box">
                        <p>Air Pressure</p>
                        <p className="data">{data?.main?.pressure} hPa</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}