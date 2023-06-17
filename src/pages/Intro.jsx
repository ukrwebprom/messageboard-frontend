import React, { useState, useEffect} from 'react';
import { useUser } from "../utils/useUser";
import { Map } from '../components/Map/Map';

export const Intro = () => {
    const { myLocation, setLocation } = useUser();
    return(
        <Map location={myLocation}/>
    )
}