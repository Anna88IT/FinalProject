import React, {useEffect, useState} from "react";
import { SearchBar } from "./SearchBar";
import { ShowInfo } from "./ShowInfo";
import {setData} from "../store/DataSlice";
import {DataApi} from '../DataApi';
import { useDispatch } from 'react-redux';


export const LeftSideBar = ({temp}) => {
    const dispatch = useDispatch();
    const [defaultCountry, setDefaultCountry] = useState("Armenia");
    const [defaultCity, setDefaultCity] =  useState("Yerevan");
    const [open, setOpen] = useState(false);

    useEffect (() => {
        const APIKEY =  "e6d2f6f7a2cc8b41b0ad47d1ede36fa9";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity},${defaultCountry}&APPID=${APIKEY}`;
        DataApi(api).then((data) => {
            if(data) {
                dispatch(setData(data));
            }
            console.log(data)
        })
    }, []);

    const handleSearchPlace = () => {
        setOpen(!open);
        setDefaultCity("");
        setDefaultCountry("");
    }


    const handleClose = () => {
        setOpen(false);
    }

    const changePage = () => {
        setOpen(false);
    }

     return(
        <>
        {!open ?
           <ShowInfo temp = {temp} handleSearchPlace = {handleSearchPlace}/>
        : <SearchBar
                defaultCountry = {defaultCountry}
                defaultCity = {defaultCity}
                handleClose = {handleClose}
                changePage = {changePage}
            />
        }
        </>
    )
}