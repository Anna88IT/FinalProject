import React, {useCallback, useState} from "react";
import {DataApi} from "../DataApi";
import {setData} from "../store/DataSlice";
import {useDispatch} from "react-redux";

export const SearchBar = ({handleClose, changePage}) => {

    const dispatch = useDispatch();
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const handleSearch = useCallback((e) => {
        e.preventDefault();
        const APIKEY =  "e6d2f6f7a2cc8b41b0ad47d1ede36fa9";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`;
        changePage();
        DataApi(api).then((data) => {
            if(data) {
                dispatch(setData(data));
            }
            console.log(data, "new" );
        })

    }, [city, country, changePage, dispatch]);

    return(
        <div className="searchbar-container">
            <div className="navbar">
                <p className="close" onClick={handleClose}>X</p>
            </div>
            <form >
                <input onChange={handleChangeCountry} placeholder="Country" value={country}></input>
                <input onChange={handleChangeCity} placeholder="City" value={city}></input>
                <button onClick={handleSearch}  className="search">Search</button>
            </form>
        </div>
       
    )
}